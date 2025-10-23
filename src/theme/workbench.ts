// ============================================================================
// createWorkbenchColors.ts - Material Design 3 Inspired VSCode Theme
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
    'focusBorder': primary,
    'selection.background': `${primaryContainer}cc`,
    'widget.shadow': `${shadow}40`,
    'widget.border': outline,

    // ═══════════════════════════════════════════════════════════════════════
    // INPUTS & FORMS - حقول الإدخال والنماذج
    // ═══════════════════════════════════════════════════════════════════════
    'input.background': surfaceContainerHigh,
    'input.foreground': onSurface,
    'input.border': outline,
    'input.placeholderForeground': `${onSurfaceVariant}99`,
    'inputOption.activeBackground': secondaryContainer,
    'inputOption.activeForeground': onSecondaryContainer,
    'inputValidation.errorBackground': errorContainer,
    'inputValidation.errorBorder': error,
    'inputValidation.errorForeground': onErrorContainer,

    // ═══════════════════════════════════════════════════════════════════════
    // DROPDOWNS - القوائم المنسدلة
    // ═══════════════════════════════════════════════════════════════════════
    'dropdown.background': surfaceContainerHigh,
    'dropdown.listBackground': surfaceContainer,
    'dropdown.border': outline,
    'dropdown.foreground': onSurface,

    // ═══════════════════════════════════════════════════════════════════════
    // BUTTONS - الأزرار
    // ═══════════════════════════════════════════════════════════════════════
    'button.background': primary,
    'button.foreground': onPrimary,
    'button.hoverBackground': `${primary}e6`,
    'button.secondaryBackground': secondaryContainer,
    'button.secondaryForeground': onSecondaryContainer,
    'button.secondaryHoverBackground': `${secondaryContainer}e6`,

    // ═══════════════════════════════════════════════════════════════════════
    // BADGES - الشارات
    // ═══════════════════════════════════════════════════════════════════════
    'badge.background': tertiaryContainer,
    'badge.foreground': onTertiaryContainer,

    // ═══════════════════════════════════════════════════════════════════════
    // SCROLLBARS - أشرطة التمرير
    // ═══════════════════════════════════════════════════════════════════════
    'scrollbar.shadow': `${shadow}30`,
    'scrollbarSlider.background': `${onSurfaceVariant}4d`,
    'scrollbarSlider.hoverBackground': `${onSurfaceVariant}66`,
    'scrollbarSlider.activeBackground': `${primary}99`,

    // ═══════════════════════════════════════════════════════════════════════
    // PROGRESS BAR - شريط التقدم
    // ═══════════════════════════════════════════════════════════════════════
    'progressBar.background': primary,

    // ═══════════════════════════════════════════════════════════════════════
    // EDITOR - MAIN SURFACE - المحرر - السطح الرئيسي
    // ═══════════════════════════════════════════════════════════════════════
    'editor.background': surface,
    'editor.foreground': onSurface,
    'editorCursor.foreground': primary,
    'editor.selectionBackground': `${primary}33`,
    'editor.inactiveSelectionBackground': `${primaryContainer}26`,
    'editor.selectionHighlightBackground': `${secondaryContainer}40`,
    'editor.wordHighlightBackground': `${tertiaryContainer}33`,
    'editor.wordHighlightStrongBackground': `${tertiaryContainer}4d`,
    'editor.lineHighlightBackground': `${surfaceContainerHigh}80`,
    'editor.lineHighlightBorder': 'transparent',
    'editor.findMatchBackground': `${secondaryContainer}66`,
    'editor.findMatchHighlightBackground': `${secondaryContainer}33`,
    'editor.findRangeHighlightBackground': `${primaryContainer}26`,

    // ═══════════════════════════════════════════════════════════════════════
    // EDITOR - LINE NUMBERS - أرقام الأسطر
    // ═══════════════════════════════════════════════════════════════════════
    'editorLineNumber.foreground': `${onSurfaceVariant}b3`,
    'editorLineNumber.activeForeground': primary,

    // ═══════════════════════════════════════════════════════════════════════
    // EDITOR - GUIDES & WHITESPACE - الأدلة والمسافات
    // ═══════════════════════════════════════════════════════════════════════
    'editorWhitespace.foreground': `${onSurfaceVariant}4d`,
    'editorIndentGuide.background': `${outline}40`,
    'editorIndentGuide.activeBackground': `${primary}80`,
    'editorRuler.foreground': `${outline}66`,
    'editorCodeLens.foreground': onSurfaceVariant,
    'editorBracketMatch.background': `${primary}26`,
    'editorBracketMatch.border': primary,

    // ═══════════════════════════════════════════════════════════════════════
    // EDITOR - WIDGETS - عناصر المحرر
    // ═══════════════════════════════════════════════════════════════════════
    'editorWidget.background': surfaceContainerHigh,
    'editorWidget.border': outline,
    'editorWidget.foreground': onSurface,
    'editorHoverWidget.background': surfaceContainerHighest,
    'editorHoverWidget.border': outline,
    'editorHoverWidget.foreground': onSurface,
    'editorSuggestWidget.background': surfaceContainerHigh,
    'editorSuggestWidget.border': outline,
    'editorSuggestWidget.foreground': onSurface,
    'editorSuggestWidget.highlightForeground': primary,
    'editorSuggestWidget.selectedBackground': primaryContainer,
    'editorSuggestWidget.selectedForeground': onPrimaryContainer,

    // ═══════════════════════════════════════════════════════════════════════
    // EDITOR - GUTTER - هامش المحرر
    // ═══════════════════════════════════════════════════════════════════════
    'editorGutter.background': surface,
    'editorGutter.modifiedBackground': tertiary,
    'editorGutter.addedBackground': primary,
    'editorGutter.deletedBackground': error,

    // ═══════════════════════════════════════════════════════════════════════
    // ACTIVITY BAR - شريط النشاط
    // ═══════════════════════════════════════════════════════════════════════
    'activityBar.background': surfaceContainer,
    'activityBar.foreground': primary,
    'activityBar.inactiveForeground': `${onSurfaceVariant}cc`,
    'activityBar.activeBorder': primary,
    'activityBar.activeBackground': `${primaryContainer}33`,
    'activityBar.activeFocusBorder': primary,
    'activityBarBadge.background': tertiaryContainer,
    'activityBarBadge.foreground': onTertiaryContainer,
    'activityBar.border': 'transparent',

    // ═══════════════════════════════════════════════════════════════════════
    // SIDE BAR - الشريط الجانبي
    // ═══════════════════════════════════════════════════════════════════════
    'sideBar.background': surfaceContainerLow,
    'sideBar.foreground': onSurface,
    'sideBar.border': 'transparent',
    'sideBarTitle.foreground': onSurface,
    'sideBarSectionHeader.background': surfaceContainer,
    'sideBarSectionHeader.foreground': onSurfaceVariant,
    'sideBarSectionHeader.border': 'transparent',

    // ═══════════════════════════════════════════════════════════════════════
    // LISTS & TREES - القوائم والأشجار
    // ═══════════════════════════════════════════════════════════════════════
    'list.hoverBackground': `${surfaceContainerHigh}b3`,
    'list.hoverForeground': onSurface,
    'list.inactiveSelectionBackground': `${surfaceContainerHigh}80`,
    'list.inactiveSelectionForeground': onSurface,
    'list.activeSelectionBackground': secondaryContainer,
    'list.activeSelectionForeground': onSecondaryContainer,
    'list.focusBackground': primaryContainer,
    'list.focusForeground': onPrimaryContainer,
    'list.focusOutline': primary,
    'list.highlightForeground': primary,
    'list.errorForeground': error,
    'list.warningForeground': tertiary,
    'list.invalidItemForeground': onErrorContainer,
    'list.deemphasizedForeground': onSurfaceVariant,

    // ═══════════════════════════════════════════════════════════════════════
    // TITLE BAR - شريط العنوان
    // ═══════════════════════════════════════════════════════════════════════
    'titleBar.activeBackground': surfaceContainer,
    'titleBar.activeForeground': onSurface,
    'titleBar.inactiveBackground': surfaceContainerLow,
    'titleBar.inactiveForeground': onSurfaceVariant,
    'titleBar.border': 'transparent',

    // ═══════════════════════════════════════════════════════════════════════
    // MENU BAR - شريط القوائم
    // ═══════════════════════════════════════════════════════════════════════
    'menubar.selectionBackground': primaryContainer,
    'menubar.selectionForeground': onPrimaryContainer,
    'menu.background': surfaceContainerHigh,
    'menu.foreground': onSurface,
    'menu.selectionBackground': secondaryContainer,
    'menu.selectionForeground': onSecondaryContainer,
    'menu.separatorBackground': outlineVariant,
    'menu.border': outline,

    // ═══════════════════════════════════════════════════════════════════════
    // STATUS BAR - شريط الحالة
    // ═══════════════════════════════════════════════════════════════════════
    'statusBar.background': surfaceContainerLow,
    'statusBar.foreground': onSurfaceVariant,
    'statusBar.border': 'transparent',
    'statusBar.noFolderBackground': surfaceContainerLow,
    'statusBar.noFolderForeground': onSurfaceVariant,
    'statusBar.debuggingBackground': errorContainer,
    'statusBar.debuggingForeground': onErrorContainer,
    'statusBarItem.prominentBackground': primaryContainer,
    'statusBarItem.prominentForeground': onPrimaryContainer,
    'statusBarItem.prominentHoverBackground': `${primaryContainer}e6`,
    'statusBarItem.remoteBackground': tertiaryContainer,
    'statusBarItem.remoteForeground': onTertiaryContainer,
    'statusBarItem.warningBackground': tertiary,
    'statusBarItem.warningForeground': onTertiary,
    'statusBarItem.errorBackground': error,
    'statusBarItem.errorForeground': onError,
    'statusBarItem.hoverBackground': `${surfaceContainer}cc`,

    // ═══════════════════════════════════════════════════════════════════════
    // TABS - علامات التبويب
    // ═══════════════════════════════════════════════════════════════════════
    'tab.activeBackground': surface,
    'tab.activeForeground': primary,
    'tab.inactiveBackground': surfaceContainerLow,
    'tab.inactiveForeground': onSurfaceVariant,
    'tab.activeBorder': 'transparent',
    'tab.activeBorderTop': primary,
    'tab.unfocusedActiveBorder': 'transparent',
    'tab.unfocusedActiveBorderTop': `${primary}80`,
    'tab.unfocusedActiveBackground': surface,
    'tab.unfocusedActiveForeground': `${primary}cc`,
    'tab.unfocusedInactiveBackground': surfaceContainerLow,
    'tab.unfocusedInactiveForeground': `${onSurfaceVariant}99`,
    'tab.border': 'transparent',
    'tab.hoverBackground': `${surfaceContainer}cc`,
    'tab.hoverForeground': onSurface,
    'tab.hoverBorder': 'transparent',
    'tab.lastPinnedBorder': outlineVariant,
    'editorGroupHeader.tabsBackground': surfaceContainerLow,
    'editorGroupHeader.tabsBorder': 'transparent',
    'editorGroupHeader.border': 'transparent',
    'editorGroupHeader.noTabsBackground': surfaceContainerLow,

    // ═══════════════════════════════════════════════════════════════════════
    // PANEL - اللوحة السفلية
    // ═══════════════════════════════════════════════════════════════════════
    'panel.background': surface,
    'panel.border': outlineVariant,
    'panelTitle.activeBorder': primary,
    'panelTitle.activeForeground': primary,
    'panelTitle.inactiveForeground': onSurfaceVariant,
    'panelSection.border': outlineVariant,
    'panelSection.dropBackground': `${primaryContainer}40`,
    'panelSectionHeader.background': surfaceContainer,
    'panelSectionHeader.foreground': onSurface,
    'panelSectionHeader.border': outlineVariant,

    // ═══════════════════════════════════════════════════════════════════════
    // NOTIFICATIONS - الإشعارات
    // ═══════════════════════════════════════════════════════════════════════
    'notificationCenter.border': outline,
    'notificationCenterHeader.background': primaryContainer,
    'notificationCenterHeader.foreground': onPrimaryContainer,
    'notificationToast.border': outline,
    'notifications.background': surfaceContainerHigh,
    'notifications.foreground': onSurface,
    'notifications.border': outline,
    'notificationLink.foreground': primary,
    'notificationsErrorIcon.foreground': error,
    'notificationsWarningIcon.foreground': tertiary,
    'notificationsInfoIcon.foreground': secondary,

    // ═══════════════════════════════════════════════════════════════════════
    // PEEK VIEW - عرض النظرة السريعة
    // ═══════════════════════════════════════════════════════════════════════
    'peekView.border': primary,
    'peekViewEditor.background': surface,
    'peekViewEditor.matchHighlightBackground': `${secondaryContainer}66`,
    'peekViewEditorGutter.background': surfaceContainerLow,
    'peekViewResult.background': surfaceContainer,
    'peekViewResult.fileForeground': onSurface,
    'peekViewResult.lineForeground': onSurfaceVariant,
    'peekViewResult.matchHighlightBackground': `${secondaryContainer}80`,
    'peekViewResult.selectionBackground': primaryContainer,
    'peekViewResult.selectionForeground': onPrimaryContainer,
    'peekViewTitle.background': surfaceContainerHigh,
    'peekViewTitleDescription.foreground': onSurfaceVariant,
    'peekViewTitleLabel.foreground': primary,

    // ═══════════════════════════════════════════════════════════════════════
    // MERGE CONFLICTS - تعارضات الدمج
    // ═══════════════════════════════════════════════════════════════════════
    'merge.currentHeaderBackground': `${primary}40`,
    'merge.currentContentBackground': `${primary}1a`,
    'merge.incomingHeaderBackground': `${secondary}40`,
    'merge.incomingContentBackground': `${secondary}1a`,
    'merge.border': outline,
    'merge.commonHeaderBackground': `${tertiary}40`,
    'merge.commonContentBackground': `${tertiary}1a`,

    // ═══════════════════════════════════════════════════════════════════════
    // GIT DECORATIONS - زخارف Git
    // ═══════════════════════════════════════════════════════════════════════
    'gitDecoration.addedResourceForeground': `${primary}e6`,
    'gitDecoration.modifiedResourceForeground': `${tertiary}e6`,
    'gitDecoration.deletedResourceForeground': `${error}e6`,
    'gitDecoration.untrackedResourceForeground': `${secondary}cc`,
    'gitDecoration.ignoredResourceForeground': `${onSurfaceVariant}80`,
    'gitDecoration.conflictingResourceForeground': `${error}cc`,
    'gitDecoration.submoduleResourceForeground': `${tertiaryContainer}e6`,

    // ═══════════════════════════════════════════════════════════════════════
    // TERMINAL - الطرفية
    // ═══════════════════════════════════════════════════════════════════════
    'terminal.background': surface,
    'terminal.foreground': onSurface,
    'terminal.selectionBackground': `${primaryContainer}80`,
    'terminal.border': outlineVariant,
    'terminalCursor.foreground': primary,
    'terminalCursor.background': surface,

    'terminal.ansiBlack': surfaceDim,
    'terminal.ansiRed': error,
    'terminal.ansiGreen': primary,
    'terminal.ansiYellow': tertiary,
    'terminal.ansiBlue': secondary,
    'terminal.ansiMagenta': tertiaryContainer,
    'terminal.ansiCyan': secondaryContainer,
    'terminal.ansiWhite': onSurface,

    'terminal.ansiBrightBlack': onSurfaceVariant,
    'terminal.ansiBrightRed': onError,
    'terminal.ansiBrightGreen': onPrimary,
    'terminal.ansiBrightYellow': onTertiary,
    'terminal.ansiBrightBlue': onSecondary,
    'terminal.ansiBrightMagenta': onTertiaryContainer,
    'terminal.ansiBrightCyan': onSecondaryContainer,
    'terminal.ansiBrightWhite': onBackground,

    // ═══════════════════════════════════════════════════════════════════════
    // BREADCRUMBS - مسارات التنقل
    // ═══════════════════════════════════════════════════════════════════════
    'breadcrumb.background': surface,
    'breadcrumb.foreground': onSurfaceVariant,
    'breadcrumb.focusForeground': onSurface,
    'breadcrumb.activeSelectionForeground': primary,
    'breadcrumbPicker.background': surfaceContainerHigh,

    // ═══════════════════════════════════════════════════════════════════════
    // QUICK PICKER - أداة الاختيار السريع
    // ═══════════════════════════════════════════════════════════════════════
    'quickInput.background': surfaceContainerHigh,
    'quickInput.foreground': onSurface,
    'quickInputList.focusBackground': primaryContainer,
    'quickInputList.focusForeground': onPrimaryContainer,
    'quickInputList.focusIconForeground': primary,

    // ═══════════════════════════════════════════════════════════════════════
    // SETTINGS - الإعدادات
    // ═══════════════════════════════════════════════════════════════════════
    'settings.headerForeground': primary,
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
    'diffEditor.insertedTextBackground': `${primary}26`,
    'diffEditor.insertedTextBorder': `${primary}40`,
    'diffEditor.removedTextBackground': `${error}26`,
    'diffEditor.removedTextBorder': `${error}40`,
    'diffEditor.border': outline,
    'diffEditor.diagonalFill': `${outlineVariant}80`,
  };
}
