
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
        // COMMENTS & DOCUMENTATION - التعليقات والتوثيق
        // ═══════════════════════════════════════════════════════════════════
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
        {
            name: "📚 JSDoc/Documentation Tags",
            scope: [
                "storage.type.class.jsdoc",
                "entity.name.type.instance.jsdoc",
                "comment.block.documentation"
            ],
            settings: {
                foreground: `${secondary}cc`,
                fontStyle: "italic"
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // KEYWORDS & CONTROL FLOW - الكلمات المفتاحية والتحكم
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "🔑 Keywords & Storage",
            scope: [
                "keyword",
                "storage.type",
                "storage.modifier",
                "keyword.control"
            ],
            settings: {
                foreground: tertiary,
                fontStyle: "bold"
            },
        },
        {
            name: "📦 Import/Export Keywords",
            scope: [
                "keyword.control.import",
                "keyword.control.export",
                "keyword.control.from"
            ],
            settings: {
                foreground: secondary,
                fontStyle: ""
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // OPERATORS & PUNCTUATION - العوامل وعلامات الترقيم
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "⚡ Operators",
            scope: [
                "keyword.operator",
                "keyword.operator.logical",
                "keyword.operator.comparison",
                "keyword.operator.assignment"
            ],
            settings: {
                foreground: tertiary
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

        // ═══════════════════════════════════════════════════════════════════
        // VARIABLES & PROPERTIES - المتغيرات والخصائص
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "📝 Variables",
            scope: [
                "variable",
                "variable.other",
                "variable.language"
            ],
            settings: {
                foreground: onSurface
            },
        },
        {
            name: "✨ Special Variables (this, super, self)",
            scope: [
                "variable.language.this",
                "variable.language.super",
                "variable.language.self"
            ],
            settings: {
                foreground: error,
                fontStyle: "italic"
            },
        },
        {
            name: "🔹 Object Properties",
            scope: [
                "variable.object.property",
                "meta.object-literal.key",
                "support.type.property-name"
            ],
            settings: {
                foreground: onSecondaryContainer
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // FUNCTIONS & METHODS - الدوال والتوابع
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
                fontStyle: "bold"
            },
        },
        {
            name: "🔧 Built-in Functions",
            scope: [
                "support.function.builtin",
                "support.function.construct"
            ],
            settings: {
                foreground: secondary
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // CLASSES, TYPES & INTERFACES - الأصناف والأنواع والواجهات
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "🏛️ Classes",
            scope: [
                "entity.name.type",
                "entity.name.class",
                "support.class",
                "storage.type.class"
            ],
            settings: {
                foreground: tertiary,
                fontStyle: "bold"
            },
        },
        {
            name: "🔷 Types & Interfaces",
            scope: [
                "support.type",
                "entity.name.type.interface",
                "storage.type.interface"
            ],
            settings: {
                foreground: tertiaryContainer,
                fontStyle: "italic"
            },
        },
        {
            name: "🔶 Type Parameters (Generics)",
            scope: [
                "entity.name.type.parameter",
                "meta.type.parameters"
            ],
            settings: {
                foreground: onTertiaryContainer,
                fontStyle: "italic"
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // STRINGS & TEMPLATES - النصوص والقوالب
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "📜 Strings",
            scope: [
                "string",
                "punctuation.definition.string"
            ],
            settings: {
                foreground: primaryContainer
            },
        },
        {
            name: "🎯 Template Strings",
            scope: [
                "string.template",
                "punctuation.definition.template-expression"
            ],
            settings: {
                foreground: `${primaryContainer}e6`
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
                foreground: onPrimaryContainer
            },
        },
        {
            name: "🔍 Regular Expressions",
            scope: [
                "string.regexp",
                "constant.other.character-class.regexp"
            ],
            settings: {
                foreground: secondary
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // NUMBERS & CONSTANTS - الأرقام والثوابت
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "🔢 Numbers",
            scope: [
                "constant.numeric",
                "constant.numeric.integer",
                "constant.numeric.float"
            ],
            settings: {
                foreground: secondaryContainer
            },
        },
        {
            name: "✔️ Boolean & Null Constants",
            scope: [
                "constant.language.boolean",
                "constant.language.null",
                "constant.language.undefined"
            ],
            settings: {
                foreground: error,
                fontStyle: "bold"
            },
        },
        {
            name: "🔒 Constants & Enums",
            scope: [
                "constant.other",
                "variable.other.constant",
                "entity.name.constant"
            ],
            settings: {
                foreground: onSecondaryContainer,
                fontStyle: ""
            },
        },
        {
            name: "🔤 Escape Characters",
            scope: [
                "constant.character.escape",
                "constant.character.entity"
            ],
            settings: {
                foreground: tertiary
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // HTML/XML - لغة الترميز
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "🏷️ HTML/XML Tags",
            scope: [
                "entity.name.tag",
                "meta.tag",
                "punctuation.definition.tag"
            ],
            settings: {
                foreground: primary
            },
        },
        {
            name: "🎨 HTML/XML Attributes",
            scope: [
                "entity.other.attribute-name",
                "text.html.basic entity.other.attribute-name.html"
            ],
            settings: {
                foreground: secondary,
                fontStyle: "italic"
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // CSS/SCSS - التنسيقات
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "🎭 CSS Selectors",
            scope: [
                "meta.selector",
                "entity.name.tag.css",
                "entity.other.attribute-name.class.css",
                "entity.other.attribute-name.id.css"
            ],
            settings: {
                foreground: tertiary,
                fontStyle: "bold"
            },
        },
        {
            name: "🎨 CSS Properties",
            scope: [
                "support.type.property-name.css",
                "meta.property-name.css"
            ],
            settings: {
                foreground: primary
            },
        },
        {
            name: "🎯 CSS Values & Units",
            scope: [
                "support.constant.property-value.css",
                "keyword.other.unit.css"
            ],
            settings: {
                foreground: secondary
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // JSON - البيانات المنظمة
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "🔑 JSON Keys",
            scope: [
                "support.type.property-name.json",
                "meta.structure.dictionary.key.json"
            ],
            settings: {
                foreground: primary
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // MARKDOWN - التنسيق النصي
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "📋 Markdown Headings",
            scope: [
                "heading.1.markdown",
                "heading.2.markdown",
                "heading.3.markdown",
                "heading.4.markdown",
                "heading.5.markdown",
                "heading.6.markdown",
                "entity.name.section.markdown"
            ],
            settings: {
                foreground: primary,
                fontStyle: "bold"
            },
        },
        {
            name: "💪 Markdown Bold",
            scope: [
                "markup.bold",
                "markup.bold.markdown"
            ],
            settings: {
                foreground: tertiary,
                fontStyle: "bold"
            },
        },
        {
            name: "📐 Markdown Italic",
            scope: [
                "markup.italic",
                "markup.italic.markdown"
            ],
            settings: {
                fontStyle: "italic"
            },
        },
        {
            name: "🔗 Markdown Links",
            scope: [
                "markup.underline.link",
                "string.other.link.title.markdown",
                "string.other.link.description.markdown"
            ],
            settings: {
                foreground: secondary
            },
        },
        {
            name: "💻 Markdown Code",
            scope: [
                "markup.inline.raw",
                "markup.fenced_code.block.markdown"
            ],
            settings: {
                foreground: primaryContainer
            },
        },
        {
            name: "📌 Markdown Lists",
            scope: [
                "punctuation.definition.list.begin.markdown"
            ],
            settings: {
                foreground: tertiary
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // DECORATORS & ANNOTATIONS - المُزيِّنات والتعليقات التوضيحية
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "🎀 Decorators & Annotations",
            scope: [
                "meta.decorator",
                "punctuation.decorator",
                "entity.name.function.decorator"
            ],
            settings: {
                foreground: secondary,
                fontStyle: "italic"
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // INVALID & DEPRECATED - الأخطاء والمهمل
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "❌ Invalid Code",
            scope: [
                "invalid",
                "invalid.illegal"
            ],
            settings: {
                foreground: error,
                background: errorContainer
            },
        },
        {
            name: "⚠️ Deprecated",
            scope: [
                "invalid.deprecated"
            ],
            settings: {
                foreground: onErrorContainer,
                fontStyle: "strikethrough"
            },
        },

        // ═══════════════════════════════════════════════════════════════════
        // DIFF/GIT - المقارنة والتحكم بالإصدارات
        // ═══════════════════════════════════════════════════════════════════
        {
            name: "➕ Diff - Inserted",
            scope: [
                "markup.inserted",
                "meta.diff.header.to-file"
            ],
            settings: {
                foreground: primary
            },
        },
        {
            name: "➖ Diff - Deleted",
            scope: [
                "markup.deleted",
                "meta.diff.header.from-file"
            ],
            settings: {
                foreground: error
            },
        },
        {
            name: "🔄 Diff - Changed",
            scope: [
                "markup.changed"
            ],
            settings: {
                foreground: tertiary
            },
        }
    ];
}
