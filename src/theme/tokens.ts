
// ============================================================================
// createTokenColors.ts - Syntax Highlighting Colors
// ============================================================================

export function createTokenColors(colors: Record<string, string>): any[] {
    const {
        primary, secondary, tertiary, error,
        onBackground, onSurface, onSurfaceVariant,
        primaryContainer, secondaryContainer, tertiaryContainer,
        errorContainer, onErrorContainer,
        onPrimary, onSecondary, onTertiary,
        onPrimaryContainer, onSecondaryContainer, onTertiaryContainer
    } = colors;

    return [
        // ═══════════════════════════════════════════════════════════════════
        // BASE
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "Default Text",
            scope: [
                "variable",
                "variable.other",
                "variable.language",
                 "meta.object-literal.key",
                 "support.type.property-name"
            ],
            settings: {
                foreground: onSurface
            },
        },
        {
            name: "⚪ Punctuation",
            scope: [
                "punctuation",
                "meta.brace",
                "punctuation.separator",
                "punctuation.terminator"
            ],
            settings: {
                foreground: onSurfaceVariant
            },
        },
        {
            name: "💬 Comments",
            scope: [
                "comment",
                "punctuation.definition.comment"
            ],
            settings: {
                foreground: `${onSurfaceVariant}b3`,
                fontStyle: "italic"
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // KEYWORDS
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "🔑 Keywords",
            scope: [
                "keyword",
                "storage.type",
                "storage.modifier"
            ],
            settings: {
                foreground: secondary,
                fontStyle: "bold"
            },
        },
        {
            name: "⚡ Operators",
            scope: [
                "keyword.operator"
            ],
            settings: {
                foreground: secondary
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // VALUES
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "📜 Strings",
            scope: [
                "string",
                "punctuation.definition.string"
            ],
            settings: {
                foreground: tertiary
            },
        },
        {
            name: "💎 String Interpolation",
            scope: [
                "meta.embedded",
                "source.embedded",
                "string punctuation.section.embedded"
            ],
            settings: {
                foreground: onTertiaryContainer
            },
        },
        {
            name: "🔢 Numbers, Booleans, Constants",
            scope: [
                "constant.numeric",
                "constant.language"
            ],
            settings: {
                foreground: tertiaryContainer
            },
        },
        {
            name: "🔤 Escape Characters",
            scope: [
                "constant.character.escape"
            ],
            settings: {
                foreground: `${tertiaryContainer}b3`
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // CLASSES & FUNCTIONS
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "⚙️ Functions & Methods",
            scope: [
                "entity.name.function",
                "meta.function-call",
                "support.function",
                "keyword.other.special-method"
            ],
            settings: {
                foreground: primary,
                fontStyle: ""
            },
        },
        {
            name: "🏛️ Classes, Types, & Interfaces",
            scope: [
                "entity.name.type",
                "entity.name.class",
                "support.class",
                "storage.type.class",
                "storage.type.interface",
                "entity.name.type.interface"
            ],
            settings: {
                foreground: secondaryContainer,
                fontStyle: "italic"
            },
        },
        {
            name: "🎀 Decorators & Annotations",
            scope: [
                "meta.decorator",
                "punctuation.decorator",
                "entity.name.function.decorator"
            ],
            settings: {
                foreground: `${secondaryContainer}b3`,
                fontStyle: "italic"
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // OTHERS
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "🏷️ HTML/XML Tags",
            scope: [
                "entity.name.tag",
                "meta.tag",
                "punctuation.definition.tag"
            ],
            settings: {
                foreground: onSecondaryContainer
            },
        },
        {
            name: "🎨 HTML/XML Attributes",
            scope: [
                "entity.other.attribute-name"
            ],
            settings: {
                foreground: onTertiaryContainer,
                fontStyle: "italic"
            },
        },
        {
            name: "❌ Invalid",
            scope: [
                "invalid",
                "invalid.illegal"
            ],
            settings: {
                foreground: error,
                background: errorContainer
            },
        },
    ];
}
