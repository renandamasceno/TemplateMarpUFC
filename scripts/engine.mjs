const SECTION_MARKER = /^\s*<!--\s*ufc-section:\s*(.*?)\s*-->\s*$/i;
const NAV_OFF_MARKER = /^\s*<!--\s*ufc-nav:\s*off\s*-->\s*$/i;
const FENCE_MARKER = /^\s*(`{3,}|~{3,})/;

function splitSlides(lines) {
  const slides = [];
  let current = [];
  let fence = null;

  for (const line of lines) {
    const fenceMatch = line.match(FENCE_MARKER);

    if (fenceMatch) {
      const marker = fenceMatch[1];
      if (!fence) fence = marker[0];
      else if (marker[0] === fence) fence = null;
    }

    if (!fence && line.trim() === "---") {
      slides.push(current);
      current = [];
    } else {
      current.push(line);
    }
  }

  slides.push(current);
  return slides;
}

function parseDeck(markdown) {
  const normalized = markdown.replace(/\r\n?/g, "\n");
  const lines = normalized.split("\n");
  let frontMatter = [];
  let contentStart = 0;

  if (lines[0]?.replace(/^\uFEFF/, "").trim() === "---") {
    const frontMatterEnd = lines.findIndex(
      (line, index) => index > 0 && line.trim() === "---",
    );

    if (frontMatterEnd !== -1) {
      frontMatter = lines.slice(0, frontMatterEnd + 1);
      contentStart = frontMatterEnd + 1;
    }
  }

  return {
    frontMatter,
    slides: splitSlides(lines.slice(contentStart)),
  };
}

function cleanSlide(lines) {
  let sectionName = null;
  let navigationDisabled = false;
  const content = [];

  for (const line of lines) {
    const sectionMatch = line.match(SECTION_MARKER);

    if (sectionMatch) {
      sectionName = sectionMatch[1].trim();
    } else if (NAV_OFF_MARKER.test(line)) {
      navigationDisabled = true;
    } else {
      content.push(line);
    }
  }

  return { content, navigationDisabled, sectionName };
}

function navigationHeader(sections, currentSection, currentPosition) {
  return sections
    .map((section) => {
      const dots = section.slides
        .map((_, index) =>
          section === currentSection && index === currentPosition ? "●" : "○",
        )
        .join("");

      return `${section.name}  ${dots}`;
    })
    .join("　　　　　　　　");
}

export function addMiniFrameNavigation(markdown) {
  const { frontMatter, slides: rawSlides } = parseDeck(markdown);
  const slides = rawSlides.map(cleanSlide);
  const sections = [];
  let activeSection = null;

  slides.forEach((slide, slideIndex) => {
    if (slide.sectionName) {
      activeSection = { name: slide.sectionName, slides: [] };
      sections.push(activeSection);
    }

    if (!slide.navigationDisabled && activeSection) {
      slide.section = activeSection;
      slide.sectionPosition = activeSection.slides.length;
      activeSection.slides.push(slideIndex);
    }
  });

  if (sections.length === 0) return markdown;

  const renderedSlides = slides.map((slide) => {
    if (!slide.section || slide.navigationDisabled) return slide.content.join("\n");

    const header = navigationHeader(
      sections,
      slide.section,
      slide.sectionPosition,
    );
    const directive = `<!-- _header: ${header} -->`;
    const firstContentLine = slide.content.findIndex((line) => line.trim() !== "");

    if (firstContentLine === -1) return directive;

    const content = [...slide.content];
    content.splice(firstContentLine, 0, directive, "");
    return content.join("\n");
  });

  const prefix = frontMatter.length > 0 ? `${frontMatter.join("\n")}\n` : "";
  return `${prefix}${renderedSlides.join("\n---\n")}`;
}

export default ({ marp }) => {
  const render = marp.render.bind(marp);
  marp.render = (markdown, environment = {}) =>
    render(addMiniFrameNavigation(markdown), environment);
  return marp;
};
