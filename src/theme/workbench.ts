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
      surfaceContainerLowest, surfaceContainerLow, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest
  } = colors;

  return {
    // General
    'foreground': onBackground,
    'focusBorder': primary,
    'selection.background': primaryContainer,
    'widget.shadow': shadow,

    'input.background': surfaceContainerHighest,
    'input.foreground': onSurface,
    'input.border': outlineVariant,
    'inputOption.activeBackground': primaryContainer,

    'dropdown.background': surfaceContainer,
    'dropdown.list.background': surfaceContainerHigh,
    'dropdown.border': outlineVariant,

    'button.background': primary,
    'button.foreground': onPrimary,

    'badge.background': primary,
    'badge.foreground': onPrimary,

    'scrollbar.shadow': shadow,
    'scrollbarSlider.background': `${primary}80`,
    'scrollbarSlider.hoverBackground': `${primary}b0`,
    'scrollbarSlider.activeBackground': `${primary}f0`,

    'progressBar.background': primary,

    // Editor
    'editor.background': background,
    'editor.foreground': onBackground,
    'editorCursor.foreground': primary,
    'editor.selectionBackground': `${primary}40`,
    'editor.lineHighlightBackground': surfaceContainerHighest,
    'editorLineNumber.foreground': onSurfaceVariant,
    'editorLineNumber.activeForeground': primary,
    'editorWhitespace.foreground': `${onSurfaceVariant}80`,
    'editorIndentGuide.background': `${onSurfaceVariant}40`,
    'editorIndentGuide.activeBackground': onSurfaceVariant,
    'editorHoverWidget.background': surfaceContainerHigh,
    'editorHoverWidget.border': outline,

    // Activity Bar - Deepest background
    'activityBar.background': surfaceContainerLowest,
    'activityBar.foreground': onSurfaceVariant,
    'activityBar.inactiveForeground': onSurfaceVariant,
    'activityBarBadge.background': primary,
    'activityBarBadge.foreground': onPrimary,
    'activityBar.border': outlineVariant,

    // Side Bar - Slightly elevated from activity bar
    'sideBar.background': surfaceContainerLow,
    'sideBar.foreground': onSurfaceVariant,
    'sideBar.border': outlineVariant,
    'sideBarTitle.foreground': onSurface,
    'sideBarSectionHeader.background': surfaceContainer,
    'sideBarSectionHeader.border': outlineVariant,

    // List and Trees
    'list.hoverBackground': surfaceContainer,
    'list.inactiveSelectionBackground': surfaceContainerLow,
    'list.activeSelectionBackground': primaryContainer,
    'list.activeSelectionForeground': onPrimaryContainer,
    'list.focusBackground': `${primary}30`,
    'list.highlightForeground': primary,

    // Title Bar - Deepest background
    'titleBar.activeBackground': surfaceContainerLowest,
    'titleBar.activeForeground': onSurface,
    'titleBar.inactiveBackground': surfaceContainerLowest,
    'titleBar.inactiveForeground': onSurfaceVariant,
    'titleBar.border': outlineVariant,

    // Status Bar - Distinct but not too prominent
    'statusBar.background': surfaceContainer,
    'statusBar.foreground': onSurfaceVariant,
    'statusBar.debuggingBackground': errorContainer,
    'statusBar.debuggingForeground': onErrorContainer,
    'statusBarItem.remoteBackground': primary,
    'statusBarItem.remoteForeground': onPrimary,
    'statusBar.border': outlineVariant,

    // Tabs
    'tab.activeBackground': background,
    'tab.inactiveBackground': surfaceContainerLow,
    'tab.activeForeground': onBackground,
    'tab.inactiveForeground': onSurfaceVariant,
    'tab.border': outlineVariant,
    'tab.activeBorderTop': primary,
    'editorGroupHeader.tabsBackground': surfaceContainerLow,
    'editorGroupHeader.tabsBorder': outlineVariant,

    // Panel - Matches sidebar elevation
    'panel.background': surfaceContainerLow,
    'panel.border': outlineVariant,
    'panelTitle.activeBorder': primary,
    'panelTitle.activeForeground': onSurface,
    'panelTitle.inactiveForeground': onSurfaceVariant,

    // Notifications
    'notificationCenterHeader.background': primaryContainer,
    'notificationCenterHeader.foreground': onPrimaryContainer,
    'notifications.background': surfaceContainerHigh,
    'notifications.foreground': onSurface,
    'notifications.border': outlineVariant,

    // Peek View
    'peekView.border': primary,
    'peekViewResult.background': surfaceContainerHigh,
    'peekViewResult.selectionBackground': primaryContainer,
    'peekViewTitle.background': surfaceContainer,
    'peekViewEditor.background': background,
    'peekViewEditorGutter.background': surfaceContainer,

    // Terminal
    'terminal.background': background,
    'terminal.foreground': onBackground,
    'terminal.ansiBlack': surfaceDim,
    'terminal.ansiRed': error,
    'terminal.ansiGreen': primary,
    'terminal.ansiYellow': secondary,
    'terminal.ansiBlue': tertiary,
    'terminal.ansiMagenta': primaryContainer,
    'terminal.ansiCyan': secondaryContainer,
    'terminal.ansiWhite': onSurface,
    'terminal.ansiBrightBlack': surfaceBright,
    'terminal.ansiBrightRed': onError,
    'terminal.ansiBrightGreen': onPrimary,
    'terminal.ansiBrightYellow': onSecondary,
    'terminal.ansiBrightBlue': onTertiary,
    'terminal.ansiBrightMagenta': onPrimaryContainer,
    'terminal.ansiBrightCyan': onSecondaryContainer,
    'terminal.ansiBrightWhite': onBackground,
  };
}
