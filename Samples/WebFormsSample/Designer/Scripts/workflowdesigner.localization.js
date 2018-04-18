﻿var WorkflowDesignerConstants = {
    ActivityColor: '#ECF0F1',
    ActivityTextColor: '#2D3436',
    ActivityInitialColor: '#27AE60',
    ActivityInitialTextColor: '#FFFFFF',
    ActivityFinalColor: '#2980B9',
    ActivityFinalTextColor: '#FFFFFF',
    ActivityShape: '#CECECE',
    SelectColor: '#F39C12',
    SelectTextColor: '#FFFFFF',
    SelectSubProcessColor: '#e3b015',
    SelectSubProcessTextColor: '#FFFFFF',
    ButtonActive: "#D4D8D9",
    BarColor: "#EDF1F2",
    BarSeparatorColor: "#D9DEE0",
    DeleteConfirm: 'Are you sure you want to delete selected item(s)?',
    DeleteConfirmCurrent: 'Are you sure you want to delete this item?',
    FieldIsRequired: 'Field is required!',
    FieldMustBeUnique: 'Field must be unique!',
    ButtonTextDelete: 'Delete',
    ButtonTextCreate: 'Create',
    ButtonTextSave: 'Save',
    ButtonTextYes: 'Yes',
    ButtonTextNo: 'No',
    ButtonTextCancel: 'Cancel',
    ButtonTextClose: 'Close',
    ButtonTextUndo: 'Undo',
    ButtonTextRedo: 'Redo',
    SaveConfirm: 'Save changes?',
    CloseWithoutSaving: 'Close without saving?',
    
    DialogConfirmText: "Question",
    None: "None",
    Warning: "Warning",

    InfoBlockLabel:{
        Activity: 'Activities: ',
        Transition: 'Transitions: ',
        Command: 'Commands: ',
    },

    ActivityNamePrefix: 'Activity_',
    ActivityFormLabel: {
        Title: 'Activity',
        Name: 'Name',
        State: 'State',
        IsInitial: 'Initial',
        IsFinal: 'Final',
        IsForSetState: 'For set state',
        IsAutoSchemeUpdate: 'Auto scheme update',
        Implementation: 'Implementation',
        PreExecutionImplementation: 'PreExecution Implementation',
        ImpOrder: 'Order',
        ImpAction: 'Action',
        ImpActionParameter: 'Action parameter',
        AlwaysConditionShouldBeSingle: 'Always condition should be single',
        OtherwiseConditionShouldBeSingle: 'Otherwise condition should be single'
    },

    TransitionFormLabel: {
        Title: 'Transition',
        Name: 'Name',
        From: 'From activity',
        To: 'To activity',
        Classifier: 'Classifier',
        Restrictions: 'Restrictions',
        RestrictionsType: 'Type',
        RestrictionsActor: 'Actor',
        Condition: 'Condition',
        ConditionType: 'Type',
        ConditionAction: 'Action',
        ResultOnPreExecution: 'Result on PreExecution',
        Trigger: 'Trigger',
        TriggerType: 'Type',
        TriggerCommand: 'Command',
        TriggerTimer: 'Timer',
        ConditionActionParameter: 'Action parameter',
        ConditionInversion: 'Invert action result',
        ConditionsConcatenationType: 'Conditions concatenation type',
        AllowConcatenationType: 'Concat allow as',
        RestrictConcatenationType: 'Concat restrict as',
        ConditionsListShouldNotBeEmpty: 'Conditions list should not be empty',
        IsFork: 'Is fork',
        MergeViaSetState: 'Merge subprocess via set state',
        DisableParentStateControl: 'Disable parent process control',
        ShowConcatParameters : "Show concatenation",
        HideConcatParameters : "Hide concatenation"
    },
    LocalizationFormLabel: {
        Title: 'Localization',
        ObjectName: 'ObjectName',
        Type: 'Type',
        IsDefault: 'IsDefault',
        Culture: 'Culture',
        Value: 'Value',
        Types: ['Command', 'State', 'Parameter'],
    },

    TimerFormLabel: {
        Title: 'Timers',
        Name: 'Name',
        Type: 'Type',
        Value: 'Value',
        Types: ['Command', 'State', 'Parameter'],
        NotOverrideIfExists : "Do not override timer if exists"
    },

    ParameterFormLabel: {
        Title: 'Parameters',
        Name: 'Name',
        Type: 'Type',
        Purpose: 'Purpose',
        Value: 'Value',
        InitialValue: 'InitialValue',
        ShowSystemParameters : 'Show system parameters'
    },

    ActorFormLabel: {
        Title: 'Actors',
        Name: 'Name',
        Rule: 'Rule',
        Value: 'Value'
    },

    CommandFormLabel: {
        Title: 'Command',
        Name: "Name",
        InputParameters: "Input Parameters",
        InputParametersName: 'Name',
        InputParametersIsRequired: 'Required',
        InputParametersParameter: 'Parameter',
        InputParametersDefaultValue: 'Default'
    },

    AdditionalParamsFormLabel: {
        Title: 'Additional Parameters',
        IsObsolete: "IsObsolete",
        DefiningParameters: 'Defining parameters',
        ProcessParameters: 'Process parameters',
        ProcessParametersName: 'Name',
        ProcessParametersValue: 'Value'
    },
    
    CodeActionsFormLabel: {
        Title: 'Code actions',
        Name: 'Name',
        ActionCode: 'Action code',
        IsGlobal: 'Is global',
        IsAsync: 'Async',
        Type: 'Type',
        GlobalDeleteMessage: "You've deleted the Global CodeAction.<br/><b>Other schemes won't be able to call this CodeAction!</b>",
        UnGlobalMessage: "You've changed the state of the global flag.<br/>There will be created a Local CodeAction based on this Global CodeAction after saving this scheme."
    },

    ToolbarLabel: {
        CreateActivity: 'Create activity',
        CopySelected: 'Copy selected',
        Undo: 'Undo',
        Redo: 'Redo',
        Move: 'Move',
        ZoomIn: 'Zoom In',
        ZoomOut: 'Zoom Out',
        ZoomPositionDefault: 'Zoom default',
        FullScreen: 'Full Screen',
        Refresh: 'Refresh',
        AutoArrangement: 'Auto arrangement',
        Actors: 'Actors',
        Commands: 'Commands',
        Parameters: 'Parameters',
        Localization: 'Localization',
        Timers: 'Timers',
        AdditionalParameters: 'Additional Parameters',
        CodeActions: 'Code actions',
        Info: "Extended info",
        Delete: "Delete",
        Clone: "Clone",
        Settings: "Settings",
        CreateTransition: "Create a transition",
        CreateActivityTransition: "Create an activity and a transition",
        Legend: "Legend"

    },
    ErrorActivityIsInitialCountText: "One element must be marked flag Initial",
    ErrorReadOnlySaveText: "The Designer in ReadOnly mode, you can't save it.",
    FormMaxHeight: 700,
    EditCodeSettings: {
        Height: 600,
        Width: 1000,
        CodeHeight: 390,
        MessageBoxHeight: 400,
        MessageBoxWidth: 600,
        SuccessBoxHeight: 150,
        SuccessBoxWidth: 300
    },
    EditCodeLabel: {
        Title: "Edit code",
        EditCodeButton: 'Edit code',
        Usings: 'Usings',
        Compile: "Compile",
        CompileSucceeded: "Compilation succeeded.",
        Success: "Success",
        Error: "Error",
        OK: "OK",
        ShowUsings: "Show usings",
        HideUsings: "Hide usings",
    },
    EditJSONSettings: {
        Height: 600,
        Width: 1000,
        CodeHeight: 480
    },
     EditJSONLabel: {
        Title: "Edit value in JSON",
        CreateEmptyType: "Create",
        Format: "Format"       
     },
    isjava: false,
    OverviewMap: {
        show: true,
        width: 300,
        height: 150
    },
    UndoDepth: 200,
    DefaultCulture: 'en-US'
};