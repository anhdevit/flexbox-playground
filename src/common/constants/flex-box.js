export const flex = {
    direction: {
        title: 'DIRECTION',
        value: [
            'inherit',
            'ltr',
            'rtl'
        ],
    },
    flexDirection: {
        title: 'FLEX DIRECTION',
        value: [
            'column',
            'column reverse',
            'row',
            'row reverse'
        ],
    },
    basis: {
        title: 'BASIS',
        defaultValue: 'auto'
    },
    grow: {
        title: 'GROW',
        defaultValue: 0
    },
    shrink: {
        title: 'SHRINK',
        defaultValue: 1
    },
    flexWrap: {
        title: 'FLEX WRAP',
        value: [
            'no wrap',
            'wrap',
            'wrap reverse'
        ],
    }
}

const valueAlignCommon = [
    'auto',
    'flex start',
    'center',
    'flex end',
    'stretch',
    'baseline',
    'space between',
    'space around',
]
export const alignment = {
    justifyContent: {
        title: 'JUSTIFY CONTENT',
        value: [
            'flex start',
            'center',
            'flex end',
            'space between',
            'space around',
            'space evenly',
        ],
    },
    alignItems: {
        title: 'ALIGN ITEMS',
        value: valueAlignCommon,
    },
    alignSelf: {
        title: 'ALIGN SELF',
        value: valueAlignCommon,
    },
    alignContent: {
        title: 'ALIGN SELF',
        value: valueAlignCommon
    }
}

export const layout = {
    width: {
        title: 'WIDTH',
        defaultValue: 100
    },
    height: {
        title: 'HEIGHT',
        defaultValue: 100
    },
    maxWidth: {
        title: 'MAX-WIDTH',
        defaultValue: 'none'
    },
    maxHeight: {
        title: 'MAX-HEIGHT',
        defaultValue: 'none'
    },
    minWidth: {
        title: 'MIN-WIDTH',
        defaultValue: 0
    },
    minHeight: {
        title: 'MIN-HEIGHT',
        defaultValue: 0
    },
    aspectRatio: {
        title: 'ASPECT RATIO',
        defaultValue: 'auto'
    },
    padding: {
        title: 'PADDING',
        value: {
            defaultValueLeft: 0,
            defaultValueTop: 0,
            defaultValueRight: 0,
            defaultValueBottom: 0
        }
    },
    border: {
        title: 'BORDER',
        value: {
            defaultValueLeft: 0,
            defaultValueTop: 0,
            defaultValueRight: 0,
            defaultValueBottom: 0
        }
    },
    margin: {
        title: 'MARGIN',
        value: {
            defaultValueLeft: 0,
            defaultValueTop: 0,
            defaultValueRight: 0,
            defaultValueBottom: 0
        }
    },
    position: {
        title: 'POSITION',
        value: {
            defaultValueLeft: '',
            defaultValueTop: '',
            defaultValueRight: '',
            defaultValueBottom: ''
        }
    },
    positionType: {
        title: 'POSOTION TYPE',
        value: [
            'relative',
            'absolute',
        ]
    },
}