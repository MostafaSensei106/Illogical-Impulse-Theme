// ============================================================================
// createWorkbenchColors.ts - Material Design 3 Enhanced Vibrant Theme
// ============================================================================

export function createWorkbenchColors(colors: Record<string, string>): { [k: string]: string } {
  const {
      primary, onPrimary, primaryContainer, onPrimaryContainer,
      secondary, onSecondary, secondaryContainer, onSecondaryContainer,
      tertiary, onTertiary, tertiaryContainer, onTertiaryContainer,
      error, onError, errorContainer, onErrorContainer,
      background, onBackground,
      surface, onSurface,
      surfaceVariant, onSurfaceVariant,
      outline, outlineVariant,
      shadow,
      surfaceDim, surfaceBright,
      surfaceContainerLowest, surfaceContainerLow, surfaceContainer,
      surfaceContainerHigh, surfaceContainerHighest
  } = colors;

  return {
    // ═══════════════════════════════════════════════════════════════════════
    // GENERAL UI - الواجهة العامة
    // ═══════════════════════════════════════════════════════════════════════
    'foreground': onSurface,
    'focusBorder': secondary,
    'selection.background': `${secondary}4d`,
    'widget.shadow': `${shadow}50`,
    'widget.border': `${outline}80`,

    // ═══════════════════════════════════════════════════════════════════════
    // INPUTS & FORMS - حقول الإدخال والنماذج
    // ═══════════════════════════════════════════════════════════════════════
    'input.background': surfaceContainerHigh,
    'input.foreground': onSurface,
    'input.border': outline,
    'input.placeholderForeground': `${onSurfaceVariant}99`,
    'inputOption.activeBackground': primary,
    'inputOption.activeForeground': onPrimary,
    'inputValidation.errorBackground': errorContainer,
    'inputValidation.errorBorder': error,
    'inputValidation.errorForeground': onErrorContainer,

    // ═══════════════════════════════════════════════════════════════════════
    // DROPDOWNS - القوائم المنسدلة
    // ═══════════════════════════════════════════════════════════════════════
    'dropdown.background': surfaceContainerHigh,
    'dropdown.listBackground': surfaceContainerHighest,
    'dropdown.border': outline,
    'dropdown.foreground': onSurface,

    // ═══════════════════════════════════════════════════════════════════════
    // BUTTONS - الأزرار
    // ═══════════════════════════════════════════════════════════════════════
    'button.background': primary,
    'button.foreground': onPrimary,
    'button.hoverBackground': `${primary}dd`,
    'button.secondaryBackground': secondaryContainer,
    'button.secondaryForeground': onSecondaryContainer,
    'button.secondaryHoverBackground': `${secondaryContainer}dd`,

    // ═══════════════════════════════════════════════════════════════════════
    // BADGES - الشارات
    // ═══════════════════════════════════════════════════════════════════════
    'badge.background': secondary,
    'badge.foreground': onSecondary,

    // ═══════════════════════════════════════════════════════════════════════
    // SCROLLBARS - أشرطة التمرير
    // ═══════════════════════════════════════════════════════════════════════
    'scrollbar.shadow': `${shadow}40`,
    'scrollbarSlider.background': `${primary}50`,
    'scrollbarSlider.hoverBackground': `${primary}80`,
    'scrollbarSlider.activeBackground': `${primary}b3`,

    // ═══════════════════════════════════════════════════════════════════════
    // PROGRESS BAR - شريط التقدم
    // ═══════════════════════════════════════════════════════════════════════
    'progressBar.background': secondary,

    // ═══════════════════════════════════════════════════════════════════════
    // EDITOR - MAIN SURFACE - المحرر - السطح الرئيسي
    // ═══════════════════════════════════════════════════════════════════════
    'editor.background': background,
    'editor.foreground': onBackground,
    'editorCursor.foreground': secondary,
    'editor.selectionBackground': `${primary}40`,
    'editor.inactiveSelectionBackground': `${primaryContainer}33`,
    'editor.selectionHighlightBackground': `${tertiary}33`,
    'editor.wordHighlightBackground': `${secondaryContainer}40`,
    'editor.wordHighlightStrongBackground': `${secondary}4d`,
    'editor.lineHighlightBackground': `${primaryContainer}20`,
    'editor.lineHighlightBorder': 'transparent',
    'editor.findMatchBackground': `${secondary}80`,
    'editor.findMatchHighlightBackground': `${secondary}40`,
    'editor.findRangeHighlightBackground': `${tertiary}26`,

    // ═══════════════════════════════════════════════════════════════════════
    // EDITOR - LINE NUMBERS - أرقام الأسطر
    // ═══════════════════════════════════════════════════════════════════════
    'editorLineNumber.foreground': `${onSurfaceVariant}99`,
    'editorLineNumber.activeForeground': primary,

    // ═══════════════════════════════════════════════════════════════════════
    // EDITOR - GUIDES & WHITESPACE - الأدلة والمسافات
    // ═══════════════════════════════════════════════════════════════════════
    'editorWhitespace.foreground': `${onSurfaceVariant}40`,
    'editorIndentGuide.background': `${outline}40`,
    'editorIndentGuide.activeBackground': `${secondary}99`,
    'editorRuler.foreground': `${outline}50`,
    'editorCodeLens.foreground': `${tertiary}cc`,
    'editorBracketMatch.background': `${secondary}33`,
    'editorBracketMatch.border': secondary,

    // ═══════════════════════════════════════════════════════════════════════
    // EDITOR - WIDGETS - عناصر المحرر
    // ═══════════════════════════════════════════════════════════════════════
    'editorWidget.background': surfaceContainer,
    'editorWidget.border': outline,
    'editorWidget.foreground': onSurface,
    'editorHoverWidget.background': surfaceContainerHigh,
    'editorHoverWidget.border': outline,
    'editorHoverWidget.foreground': onSurface,
    'editorSuggestWidget.background': surfaceContainer,
    'editorSuggestWidget.border': outline,
    'editorSuggestWidget.foreground': onSurface,
    'editorSuggestWidget.highlightForeground': secondary,
    'editorSuggestWidget.selectedBackground': primaryContainer,
    'editorSuggestWidget.selectedForeground': onPrimaryContainer,

    // ═══════════════════════════════════════════════════════════════════════
    // EDITOR - GUTTER - هامش المحرر
    // ═══════════════════════════════════════════════════════════════════════
    'editorGutter.background': background,
    'editorGutter.modifiedBackground': secondary,
    'editorGutter.addedBackground': tertiary,
    'editorGutter.deletedBackground': error,

    // ═══════════════════════════════════════════════════════════════════════
    // ACTIVITY BAR - شريط النشاط
    // ═══════════════════════════════════════════════════════════════════════
    'activityBar.background': surfaceContainerLow,
    'activityBar.foreground': primary,
    'activityBar.inactiveForeground': `${onSurfaceVariant}b3`,
    'activityBar.activeBorder': secondary,
    'activityBar.activeBackground': `${primary}26`,
    'activityBar.activeFocusBorder': secondary,
    'activityBarBadge.background': secondary,
    'activityBarBadge.foreground': onSecondary,
    'activityBar.border': outlineVariant,

    // ═══════════════════════════════════════════════════════════════════════
    // SIDE BAR - الشريط الجانبي
    // ═══════════════════════════════════════════════════════════════════════
    'sideBar.background': surfaceContainerHigh,
    'sideBar.foreground': onSurface,
    'sideBar.border': outlineVariant,
    'sideBarTitle.foreground': primary,
    'sideBarSectionHeader.background': surfaceContainerHigh,
    'sideBarSectionHeader.foreground': secondary,
    'sideBarSectionHeader.border': outline,

    // ═══════════════════════════════════════════════════════════════════════
    // LISTS & TREES - القوائم والأشجار
    // ═══════════════════════════════════════════════════════════════════════
    'list.hoverBackground': `${primary}1a`,
    'list.hoverForeground': onSurface,
    'list.inactiveSelectionBackground': `${primaryContainer}66`,
    'list.inactiveSelectionForeground': onPrimaryContainer,
    'list.activeSelectionBackground': primary,
    'list.activeSelectionForeground': onPrimary,
    'list.focusBackground': `${secondary}40`,
    'list.focusForeground': onSecondaryContainer,
    'list.focusOutline': secondary,
    'list.highlightForeground': secondary,
    'list.errorForeground': error,
    'list.warningForeground': tertiary,
    'list.invalidItemForeground': onErrorContainer,
    'list.deemphasizedForeground': onSurfaceVariant,

    // ═══════════════════════════════════════════════════════════════════════
    // TITLE BAR - شريط العنوان
    // ═══════════════════════════════════════════════════════════════════════
    'titleBar.activeBackground': surface,
    'titleBar.activeForeground': onSurface,
    'titleBar.inactiveBackground': surfaceContainerLowest,
    'titleBar.inactiveForeground': onSurfaceVariant,
    'titleBar.border': outlineVariant,

    // ═══════════════════════════════════════════════════════════════════════
    // MENU BAR - شريط القوائم
    // ═══════════════════════════════════════════════════════════════════════
    'menubar.selectionBackground': primaryContainer,
    'menubar.selectionForeground': onPrimaryContainer,
    'menu.background': surfaceContainerHigh,
    'menu.foreground': onSurface,
    'menu.selectionBackground': primary,
    'menu.selectionForeground': onPrimary,
    'menu.separatorBackground': outline,
    'menu.border': outlineVariant,

    // ═══════════════════════════════════════════════════════════════════════
    // STATUS BAR - شريط الحالة
    // ═══════════════════════════════════════════════════════════════════════
    'statusBar.background': primaryContainer,
    'statusBar.foreground': onPrimaryContainer,
    'statusBar.border': outline,
    'statusBar.noFolderBackground': secondaryContainer,
    'statusBar.noFolderForeground': onSecondaryContainer,
    'statusBar.debuggingBackground': errorContainer,
    'statusBar.debuggingForeground': onErrorContainer,
    'statusBarItem.prominentBackground': primary,
    'statusBarItem.prominentForeground': onPrimary,
    'statusBarItem.prominentHoverBackground': `${primary}dd`,
    'statusBarItem.remoteBackground': secondary,
    'statusBarItem.remoteForeground': onSecondary,
    'statusBarItem.warningBackground': tertiary,
    'statusBarItem.warningForeground': onTertiary,
    'statusBarItem.errorBackground': error,
    'statusBarItem.errorForeground': onError,
    'statusBarItem.hoverBackground': `${primary}40`,

    // ═══════════════════════════════════════════════════════════════════════
    // TABS - علامات التبويب
    // ═══════════════════════════════════════════════════════════════════════
    'tab.activeBackground': surface,
    'tab.activeForeground': primary,
    'tab.inactiveBackground': surfaceContainer,
    'tab.inactiveForeground': onSurfaceVariant,
    'tab.activeBorder': 'transparent',
    'tab.activeBorderTop': primary,
    'tab.unfocusedActiveBorder': 'transparent',
    'tab.unfocusedActiveBorderTop': `${primary}99`,
    'tab.unfocusedActiveBackground': surface,
    'tab.unfocusedActiveForeground': `${primary}b3`,
    'tab.unfocusedInactiveBackground': surfaceContainer,
    'tab.unfocusedInactiveForeground': `${onSurfaceVariant}80`,
    'tab.border': outlineVariant,
    'tab.hoverBackground': `${primary}1a`,
    'tab.hoverForeground': primary,
    'tab.hoverBorder': 'transparent',
    'tab.lastPinnedBorder': `${secondary}60`,
    'editorGroupHeader.tabsBackground': surfaceContainer,
    'editorGroupHeader.tabsBorder': outlineVariant,
    'editorGroupHeader.border': outlineVariant,
    'editorGroupHeader.noTabsBackground': surfaceContainer,

    // ═══════════════════════════════════════════════════════════════════════
    // PANEL - اللوحة السفلية
    // ═══════════════════════════════════════════════════════════════════════
    'panel.background': surfaceContainerLow,
    'panel.border': outlineVariant,
    'panelTitle.activeBorder': secondary,
    'panelTitle.activeForeground': secondary,
    'panelTitle.inactiveForeground': onSurfaceVariant,
    'panelSection.border': outlineVariant,
    'panelSection.dropBackground': `${primary}33`,
    'panelSectionHeader.background': surfaceContainerHigh,
    'panelSectionHeader.foreground': onSurface,
    'panelSectionHeader.border': outline,

    // ═══════════════════════════════════════════════════════════════════════
    // NOTIFICATIONS - الإشعارات
    // ═══════════════════════════════════════════════════════════════════════
    'notificationCenter.border': outline,
    'notificationCenterHeader.background': primaryContainer,
    'notificationCenterHeader.foreground': onPrimaryContainer,
    'notificationToast.border': outline,
    'notifications.background': surfaceContainerHighest,
    'notifications.foreground': onSurface,
    'notifications.border': outline,
    'notificationLink.foreground': secondary,
    'notificationsErrorIcon.foreground': error,
    'notificationsWarningIcon.foreground': tertiary,
    'notificationsInfoIcon.foreground': primary,

    // ═══════════════════════════════════════════════════════════════════════
    // PEEK VIEW - عرض النظرة السريعة
    // ═══════════════════════════════════════════════════════════════════════
    'peekView.border': secondary,
    'peekViewEditor.background': surfaceContainer,
    'peekViewEditor.matchHighlightBackground': `${secondary}66`,
    'peekViewEditorGutter.background': surfaceContainer,
    'peekViewResult.background': surfaceContainerHigh,
    'peekViewResult.fileForeground': onSurface,
    'peekViewResult.lineForeground': onSurfaceVariant,
    'peekViewResult.matchHighlightBackground': `${secondary}99`,
    'peekViewResult.selectionBackground': primaryContainer,
    'peekViewResult.selectionForeground': onPrimaryContainer,
    'peekViewTitle.background': primary,
    'peekViewTitleDescription.foreground': `${onPrimary}b3`,
    'peekViewTitleLabel.foreground': onPrimary,

    // ═══════════════════════════════════════════════════════════════════════
    // MERGE CONFLICTS - تعارضات الدمج
    // ═══════════════════════════════════════════════════════════════════════
    'merge.currentHeaderBackground': `${tertiary}50`,
    'merge.currentContentBackground': `${tertiary}20`,
    'merge.incomingHeaderBackground': `${secondary}50`,
    'merge.incomingContentBackground': `${secondary}20`,
    'merge.border': outline,
    'merge.commonHeaderBackground': `${onSurfaceVariant}40`,
    'merge.commonContentBackground': `${onSurfaceVariant}20`,

    // ═══════════════════════════════════════════════════════════════════════
    // GIT DECORATIONS - زخارف Git
    // ═══════════════════════════════════════════════════════════════════════
    'gitDecoration.addedResourceForeground': tertiary,
    'gitDecoration.modifiedResourceForeground': secondary,
    'gitDecoration.deletedResourceForeground': error,
    'gitDecoration.untrackedResourceForeground': `${tertiary}b3`,
    'gitDecoration.ignoredResourceForeground': `${onSurfaceVariant}66`,
    'gitDecoration.conflictingResourceForeground': error,
    'gitDecoration.submoduleResourceForeground': primary,

    // ═══════════════════════════════════════════════════════════════════════
    // TERMINAL - الطرفية
    // ═══════════════════════════════════════════════════════════════════════
    'terminal.background': background,
    'terminal.foreground': onBackground,
    'terminal.selectionBackground': `${primary}66`,
    'terminal.border': outlineVariant,
    'terminalCursor.foreground': secondary,
    'terminalCursor.background': background,

    'terminal.ansiBlack': surfaceDim,
    'terminal.ansiRed': error,
    'terminal.ansiGreen': tertiary,
    'terminal.ansiYellow': `${tertiary}dd`,
    'terminal.ansiBlue': secondary,
    'terminal.ansiMagenta': `${secondary}dd`,
    'terminal.ansiCyan': primary,
    'terminal.ansiWhite': onSurface,

    'terminal.ansiBrightBlack': onSurfaceVariant,
    'terminal.ansiBrightRed': onError,
    'terminal.ansiBrightGreen': onTertiary,
    'terminal.ansiBrightYellow': tertiary,
    'terminal.ansiBrightBlue': onSecondary,
    'terminal.ansiBrightMagenta': secondary,
    'terminal.ansiBrightCyan': onPrimary,
    'terminal.ansiBrightWhite': onBackground,

    // ═══════════════════════════════════════════════════════════════════════
    // BREADCRUMBS - مسارات التنقل
    // ═══════════════════════════════════════════════════════════════════════
    'breadcrumb.background': surface,
    'breadcrumb.foreground': onSurfaceVariant,
    'breadcrumb.focusForeground': primary,
    'breadcrumb.activeSelectionForeground': secondary,
    'breadcrumbPicker.background': surfaceContainerHighest,

    // ═══════════════════════════════════════════════════════════════════════
    // QUICK PICKER - أداة الاختيار السريع
    // ═══════════════════════════════════════════════════════════════════════
    'quickInput.background': surfaceContainerHighest,
    'quickInput.foreground': onSurface,
    'quickInputList.focusBackground': primaryContainer,
    'quickInputList.focusForeground': onPrimaryContainer,
    'quickInputList.focusIconForeground': onPrimaryContainer,

    // ═══════════════════════════════════════════════════════════════════════
    // SETTINGS - الإعدادات
    // ═══════════════════════════════════════════════════════════════════════
    'settings.headerForeground': secondary,
    'settings.modifiedItemIndicator': tertiary,
    'settings.dropdownBackground': surfaceContainerHigh,
    'settings.dropdownForeground': onSurface,
    'settings.dropdownBorder': outline,
    'settings.checkboxBackground': surfaceContainerHigh,
    'settings.checkboxForeground': onSurface,
    'settings.checkboxBorder': outline,
    'settings.textInputBackground': surfaceContainerHigh,
    'settings.textInputForeground': onSurface,
    'settings.textInputBorder': outline,
    'settings.numberInputBackground': surfaceContainerHigh,
    'settings.numberInputForeground': onSurface,
    'settings.numberInputBorder': outline,

    // ═══════════════════════════════════════════════════════════════════════
    // DIFF EDITOR - محرر المقارنة
    // ═══════════════════════════════════════════════════════════════════════
    'diffEditor.insertedTextBackground': `${tertiary}33`,
    'diffEditor.insertedTextBorder': `${tertiary}60`,
    'diffEditor.removedTextBackground': `${error}33`,
    'diffEditor.removedTextBorder': `${error}60`,
    'diffEditor.border': outline,
    'diffEditor.diagonalFill': `${outlineVariant}80`,
  };
}
