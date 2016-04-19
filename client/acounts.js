

// configure the special accounts user interface
// by setting up some extra fields and specifying constraints
// see:https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3/    
accountsUIBootstrap3.setLanguage('es');
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'username',
        fieldLabel: 'Usuario',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Por favor escribe tu nombre de usuario");
            return false;
          } else {
            return true;
          }
        }
    }]
});

