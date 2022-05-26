
" Maintainer: Shahidul Islam Majumder <hello@shahid.pro>

set background=dark
hi clear

if exists('syntax_on')
  syntax reset
endif

let g:colors_name='horizon'

hi Normal guifg=#6c6f93 ctermfg=60 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi Comment guifg=#2e303e ctermfg=236 guibg=NONE ctermbg=NONE gui=italic cterm=italic 
hi SpecialComment guifg=#2e303e ctermfg=236 guibg=NONE ctermbg=NONE gui=italic cterm=italic 
hi Todo guifg=#2e303e ctermfg=236 guibg=#1c1e26 ctermbg=234 gui=bold,italic cterm=bold,italic 
hi Error guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=bold,reverse cterm=bold,reverse 
hi Constant guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi Statement guifg=#21bfc2 ctermfg=37 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi Type guifg=#fac29a ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi Keyword guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi Identifier guifg=#e95678 ctermfg=168 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi PreProc guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi Title guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi Number guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi Boolean guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi Function guifg=#25b2bc ctermfg=37 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi String guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi Special guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi Underlined   gui=underline cterm=underline 
hi Cursor guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=reverse cterm=reverse 
hi Search guifg=NONE ctermfg=NONE guibg=#6c6f93 ctermbg=60 gui=bold cterm=bold 
hi QuickFixLine guifg=NONE ctermfg=NONE guibg=#25b2bc ctermbg=37 gui=NONE cterm=NONE 
hi Visual guifg=NONE ctermfg=NONE guibg=#6c6f93 ctermbg=60 gui=NONE cterm=NONE 
hi MatchParen guifg=NONE ctermfg=NONE guibg=#6c6f93 ctermbg=60 gui=bold cterm=bold 
hi NonText guifg=#6c6f93 ctermfg=60 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi SpecialKey guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi ErrorMsg guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=bold,reverse cterm=bold,reverse 
hi WarningMsg guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=bold,reverse cterm=bold,reverse 
hi ModeMsg guifg=#fac29a ctermfg=216 guibg=NONE ctermbg=NONE gui=bold,reverse cterm=bold,reverse 
hi MoreMsg guifg=#09f7a0 ctermfg=49 guibg=NONE ctermbg=NONE gui=bold,reverse cterm=bold,reverse 
hi Question guifg=#21bfc2 ctermfg=37 guibg=NONE ctermbg=NONE gui=bold,reverse cterm=bold,reverse 
hi Directory guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=bold cterm=bold 
hi DiffAdd guifg=NONE ctermfg=NONE guibg=#27d796 ctermbg=42 gui=NONE cterm=NONE 
hi DiffDelete guifg=#6c6f93 ctermfg=60 guibg=#e9436f ctermbg=167 gui=NONE cterm=NONE 
hi DiffChange guifg=NONE ctermfg=NONE guibg=#25b2bc ctermbg=37 gui=NONE cterm=NONE 
hi DiffText guifg=NONE ctermfg=NONE guibg=#25b2bc ctermbg=37 gui=NONE cterm=NONE 
hi Folded guifg=#b877db ctermfg=140 guibg=#1c1e26 ctermbg=234 gui=italic cterm=italic 
hi FoldColumn guifg=#b877db ctermfg=140 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi Pmenu guifg=#6c6f93 ctermfg=60 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi PmenuSel guifg=#b877db ctermfg=140 guibg=#1c1e26 ctermbg=234 gui=bold,reverse cterm=bold,reverse 
hi PmenuSbar guifg=NONE ctermfg=NONE guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi PmenuThumb guifg=NONE ctermfg=NONE guibg=#fac29a ctermbg=216 gui=NONE cterm=NONE 
hi WildMenu guifg=#b877db ctermfg=140 guibg=#1c1e26 ctermbg=234 gui=bold,reverse cterm=bold,reverse 
hi LineNr guifg=#6c6f93 ctermfg=60 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi CursorLine guifg=NONE ctermfg=NONE guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi CursorColumn guifg=NONE ctermfg=NONE guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi CursorLineNr guifg=NONE ctermfg=NONE guibg=NONE ctermbg=NONE gui=bold cterm=bold 
hi SpellBad guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=underline cterm=underline 
hi SpellCap guifg=#21bfc2 ctermfg=37 guibg=NONE ctermbg=NONE gui=underline cterm=underline 
hi SpellRare guifg=#e95678 ctermfg=168 guibg=NONE ctermbg=NONE gui=underline cterm=underline 
hi SpellLocal guifg=#21bfc2 ctermfg=37 guibg=NONE ctermbg=NONE gui=underline cterm=underline 
hi Terminal guifg=#1c1e26 ctermfg=234 guibg=#6c6f93 ctermbg=60 gui=NONE cterm=NONE 
hi diffAdded guifg=#09f7a0 ctermfg=49 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi diffRemoved guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi diffFile guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=bold,reverse cterm=bold,reverse 
hi diffNewFile guifg=#09f7a0 ctermfg=49 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi diffOldFile guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSString guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSCharacter guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSNumber guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSBoolean guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSFloat guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSVariable guifg=#e95678 ctermfg=168 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSLabel guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSFunction guifg=#25b2bc ctermfg=37 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSMethod guifg=#25b2bc ctermfg=37 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSParameter guifg=#e95678 ctermfg=168 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi jsonTSLabel guifg=#e95678 ctermfg=168 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSProperty guifg=#f09383 ctermfg=210 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSStringRegex guifg=#f09383 ctermfg=210 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSStringEscape guifg=#25b2bc ctermfg=37 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSPunctBracket guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSPunctSpecial guifg=#6c6f93 ctermfg=60 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSOperator guifg=#6c6f93 ctermfg=60 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSKeyword guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSKeywordOperator guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSKeywordReturn guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSConditional guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSException guifg=#b877db ctermfg=140 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSPunctDelimiter guifg=#6c6f93 ctermfg=60 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TSComment guifg=#2e303e ctermfg=236 guibg=NONE ctermbg=NONE gui=italic cterm=italic 
hi rubyArrayDelimiter guifg=#21bfc2 ctermfg=37 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi rubyCurlyBlockDelimiter guifg=#21bfc2 ctermfg=37 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi SignColumn  guibg=#1c1e26 ctermbg=234  
hi GitGutterAdd guifg=#09f7a0 ctermfg=49 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi GitGutterDelete guifg=#e95379 ctermfg=168 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi GitGutterChange guifg=#27d796 ctermfg=42 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 

hi TabLine guifg=#232530 ctermfg=235 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi TabLineSel guifg=#b877db ctermfg=140 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi StatusLine guifg=#6c6f93 ctermfg=60 guibg=#232530 ctermbg=235 gui=NONE cterm=NONE 
hi StatusLineNC guifg=#232530 ctermfg=235 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi StatusLineTerm guifg=#09f7a0 ctermfg=49 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi StatusLineTermNC guifg=#232530 ctermfg=235 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi VertSplit guifg=#6c6f93 ctermfg=60 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi ColorColumn guifg=NONE ctermfg=NONE guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi ToolbarLine  guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi ToolbarButton guifg=#2e303e ctermfg=236 guibg=NONE ctermbg=NONE gui=reverse cterm=reverse 
hi debugPc guifg=NONE ctermfg=NONE guibg=#25b2bc ctermbg=37 gui=NONE cterm=NONE 
hi debugBreakpoint guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=reverse cterm=reverse 
hi IndentBlanklineChar guifg=#232530 ctermfg=235 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi NvimTreeRootFolder guifg=#6c6f93 ctermfg=60 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi NvimTreeFolderName guifg=#6c6f93 ctermfg=60 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi NvimTreeOpenedFolderName guifg=#6c6f93 ctermfg=60 guibg=NONE ctermbg=NONE gui=bold cterm=bold 
hi NvimTreeSpecialFile guifg=#6c6f93 ctermfg=60 guibg=NONE ctermbg=NONE  
hi NvimTreeGitDirty guifg=#fab795 ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi NvimTreeGitNew guifg=#27d796 ctermfg=42 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi NvimTreeGitDeleted guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi GitSignsAdd guifg=#27d796 ctermfg=42 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi GitSignsChange guifg=#fab795 ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi GitSignsDelete guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi DashboardHeader guifg=#e95379 ctermfg=168 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi DashboardCenter guifg=#fab28e ctermfg=216 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi DashboardShortCut guifg=#f09383 ctermfg=210 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi DashboardFooter guifg=#21bfc2 ctermfg=37 guibg=NONE ctermbg=NONE gui=NONE cterm=NONE 
hi TelescopeNormal guifg=#6c6f93 ctermfg=60 guibg=#1c1e26 ctermbg=234 gui=NONE cterm=NONE 
hi TelescopeSelection guifg=NONE ctermfg=NONE guibg=#6c6f93 ctermbg=60 gui=NONE cterm=NONE 