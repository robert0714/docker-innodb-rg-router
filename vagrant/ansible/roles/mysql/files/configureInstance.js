var dbPass = "qazwsx"
try {
  print('Configuring Instance...\n');
  shell.connect('root@localhost:3306', dbPass)
  var console= dba.configureInstance();
  print(console);
  print('.\nInstances successfully configured to the instance.'); 
} catch(e) {
  print('\nThe InnoDB cluster node could not be configured.\n\nError: ' + e.message + '\n');
}
