try {
  ;(() => {
    var r = __REACT__,
      {
        Children: A,
        Component: I,
        Fragment: R,
        Profiler: L,
        PureComponent: M,
        StrictMode: B,
        Suspense: P,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: x,
        cloneElement: v,
        createContext: H,
        createElement: N,
        createFactory: D,
        createRef: F,
        forwardRef: W,
        isValidElement: K,
        lazy: Y,
        memo: G,
        useCallback: m,
        useContext: w,
        useDebugValue: U,
        useEffect: p,
        useImperativeHandle: V,
        useLayoutEffect: q,
        useMemo: z,
        useReducer: Z,
        useRef: $,
        useState: j,
        version: J
      } = __REACT__
    var oe = __STORYBOOK_API__,
      {
        ActiveTabs: re,
        Consumer: ae,
        ManagerContext: ne,
        Provider: se,
        addons: l,
        combineParameters: le,
        controlOrMetaKey: ue,
        controlOrMetaSymbol: ce,
        eventMatchesShortcut: ie,
        eventToShortcut: me,
        isMacLike: pe,
        isShortcutTaken: Se,
        keyToSymbol: _e,
        merge: de,
        mockChannel: Te,
        optionOrAltSymbol: be,
        shortcutMatchesShortcut: Oe,
        shortcutToHumanString: ye,
        types: S,
        useAddonState: Ce,
        useArgTypes: Ee,
        useArgs: he,
        useChannel: fe,
        useGlobalTypes: ge,
        useGlobals: _,
        useParameter: ke,
        useSharedState: Ae,
        useStoryPrepared: Ie,
        useStorybookApi: d,
        useStorybookState: Re
      } = __STORYBOOK_API__
    var xe = __STORYBOOK_COMPONENTS__,
      {
        A: ve,
        ActionBar: He,
        AddonPanel: Ne,
        Badge: De,
        Bar: Fe,
        Blockquote: We,
        Button: Ke,
        ClipboardCode: Ye,
        Code: Ge,
        DL: we,
        Div: Ue,
        DocumentWrapper: Ve,
        ErrorFormatter: qe,
        FlexBar: ze,
        Form: Ze,
        H1: $e,
        H2: je,
        H3: Je,
        H4: Qe,
        H5: Xe,
        H6: et,
        HR: tt,
        IconButton: T,
        IconButtonSkeleton: ot,
        Icons: b,
        Img: rt,
        LI: at,
        Link: nt,
        ListItem: st,
        Loader: lt,
        OL: ut,
        P: ct,
        Placeholder: it,
        Pre: mt,
        ResetWrapper: pt,
        ScrollArea: St,
        Separator: _t,
        Spaced: dt,
        Span: Tt,
        StorybookIcon: bt,
        StorybookLogo: Ot,
        Symbols: yt,
        SyntaxHighlighter: Ct,
        TT: Et,
        TabBar: ht,
        TabButton: ft,
        TabWrapper: gt,
        Table: kt,
        Tabs: At,
        TabsState: It,
        TooltipLinkList: Rt,
        TooltipMessage: Lt,
        TooltipNote: Mt,
        UL: Bt,
        WithTooltip: Pt,
        WithTooltipPure: xt,
        Zoom: vt,
        codeCommon: Ht,
        components: Nt,
        createCopyToClipboardFunction: Dt,
        getStoryHref: Ft,
        icons: Wt,
        interleaveSeparators: Kt,
        nameSpaceClassNames: Yt,
        resetComponents: Gt,
        withReset: wt
      } = __STORYBOOK_COMPONENTS__
    var u = 'storybook/measure-addon',
      O = `${u}/tool`,
      y = () => {
        let [a, c] = _(),
          { measureEnabled: n } = a,
          i = d(),
          s = m(() => c({ measureEnabled: !n }), [c, n])
        return (
          p(() => {
            i.setAddonShortcut(u, {
              label: 'Toggle Measure [M]',
              defaultShortcut: ['M'],
              actionName: 'measure',
              showInMenu: !1,
              action: s
            })
          }, [s, i]),
          r.createElement(
            T,
            { key: O, active: n, title: 'Enable measure', onClick: s },
            r.createElement(b, { icon: 'ruler' })
          )
        )
      }
    l.register(u, () => {
      l.add(O, {
        type: S.TOOL,
        title: 'Measure',
        match: ({ viewMode: a }) => a === 'story',
        render: () => r.createElement(y, null)
      })
    })
  })()
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  )
}
