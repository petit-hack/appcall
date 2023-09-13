import AircallPhone from 'aircall-everywhere';

const phone = new AircallPhone({
    domToLoadPhone: '#phone',
    onLogin: settings => {
      // ...
    },
    onLogout: () => {
      // ...
    }
  });