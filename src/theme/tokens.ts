
export function createTokenColors(colors: Record<string, string>): any[] {
    const { 
        primary, secondary, tertiary, error, onBackground, onSurface, onSurfaceVariant, 
        primaryContainer, secondaryContainer, tertiaryContainer, errorContainer, 
        onPrimary, onSecondary, onTertiary, onErrorContainer, onPrimaryContainer, onSecondaryContainer, onTertiaryContainer
    } = colors;
    const commentColor = `${onSurfaceVariant}b3`; // 70% opacity

    return [
        {
            name: "Comments",
            scope: ["comment", "punctuation.definition.comment"],
            settings: { foreground: commentColor, fontStyle: "italic" },
        },
        {
            name: "Variables",
            scope: ["variable", "string constant.other.placeholder"],
            settings: { foreground: onSurface },
        },
        {
            name: "Invalid",
            scope: ["invalid", "invalid.illegal"],
            settings: { foreground: error, background: errorContainer },
        },
        {
            name: "Keywords",
            scope: ["keyword", "storage.type", "storage.modifier"],
            settings: { foreground: secondary, fontStyle: "" },
        },
        {
            name: "Operators",
            scope: "keyword.operator",
            settings: { foreground: onSurfaceVariant },
        },
        {
            name: "Punctuation",
            scope: ["punctuation", "meta.brace"],
            settings: { foreground: onSurfaceVariant },
        },
        {
            name: "Functions",
            scope: ["entity.name.function", "meta.function-call", "support.function", "keyword.other.special-method"],
            settings: { foreground: primary, fontStyle: "" },
        },
        {
            name: "Classes",
            scope: ["entity.name.type", "entity.name.class", "support.class", "storage.type.class"],
            settings: { foreground: tertiary, fontStyle: "italic" },
        },
        {
            name: "Strings",
            scope: ["string", "punctuation.definition.string", "string punctuation.section.embedded source"],
            settings: { foreground: secondaryContainer },
        },
        {
            name: "Numbers, Booleans, Constants",
            scope: ["constant.numeric", "constant.language", "constant.character.escape"],
            settings: { foreground: primaryContainer },
        },
        {
            name: "Tags",
            scope: ["entity.name.tag", "meta.tag"],
            settings: { foreground: onSurfaceVariant },
        },
        {
            name: "Attributes",
            scope: ["entity.other.attribute-name", "text.html.basic entity.other.attribute-name.html"],
            settings: { foreground: tertiaryContainer, fontStyle: "italic" },
        },
        {
            name: "CSS: Selectors",
            scope: ["meta.selector", "entity.name.tag.css", "entity.other.attribute-name.class.css"],
            settings: { foreground: secondary, fontStyle: "" },
        },
        {
            name: "JSON Keys",
            scope: "support.type.property-name.json",
            settings: { foreground: onSecondaryContainer },
        },
        {
            name: "Markdown: Headings",
            scope: ["heading.1.markdown", "heading.2.markdown", "heading.3.markdown"],
            settings: { foreground: primary, fontStyle: "bold" },
        },
        {
            name: "Markdown: Bold, Italic",
            scope: ["strong.markdown", "emphasis.markdown"],
            settings: { fontStyle: "bold" },
        },
        {
            name: "Markdown: Links",
            scope: ["string.other.link.title.markdown", "string.other.link.description.markdown"],
            settings: { foreground: secondary, fontStyle: "" },
        },
        {
            name: "Types",
            scope: ["support.type"],
            settings: { foreground: tertiary, fontStyle: "italic" }
        },
        {
            name: "Decorators",
            scope: ["meta.decorator"],
            settings: { foreground: tertiary, fontStyle: "italic" }
        }
    ];
}
