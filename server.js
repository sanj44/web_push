const webpush = require('web-push');
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/c4yLf_1XIEw:APA91bF7vxDOMWz50dmIvZqzzpvnGj4u5k4moQKJ-QHYrYxTD_I7ctTd4nCVzb3yIgMQkNcArnkSglUZZ1K2GRx2PkswJ12pxBxgx0l7tSyP36GcfU51WZyTJ25oWOfiAUG7ThuPk5r-","expirationTime":null,"keys":{"p256dh":"BCDYFsODNEJIHnDUajE6Qjy0fajgkYVIgKls5FGj9ukHmYDKvcXXj16n3tLO-Cf7RNZY-_5kRSUrPzAabOrvu5o=","auth":"3x5q6NxJ7UTIx1Hi40-rJw=="}};

const payload = 'sanjeet singh vhopjhg';

const options = {
  gcmAPIKey: 'AIzaSyBGk_b52haMt3i1OKbX_cGSXywY26mL3CM',
  vapidDetails: {
    subject: 'https://fcm.googleapis.com/',
    publicKey: 'BN68DM1fyqpBQVSSVRNRwYAWzMrKaP117K77owYRUvggoiW6KH7C57RJUzl8obW8-HHWSstysqdnoYkotv99dx8',
    privateKey: 'CtytE9KhUXNyIGpYc63EMnao0rW2oyfr4R9unIik-QE'
  },
  TTL: 63,
  headers: {
    '< header name >': '< header value >'
  },
  contentEncoding: 'aesgcm'
}
try {
	console.log('send')
  const details = webpush.generateRequestDetails(
    pushSubscription,
    payload,
    options
  );
  
  // webpush.sendNotification(
  // pushSubscription,
  // payload,
  // options
// );
 
    const params = {
        title: 'Test title',
        message: 'Test message',
        icon: '/api/push/icon/', //icon served by my API
        tag: 'message-tag'
    };
 webpush.sendNotification(pushSubscription, new Buffer(JSON.stringify(params), 'utf8'))
             .then(
                 function (data) {
                     return callback(null, data);
                 },
                 function (err) {
                     return callback(err, null);
                 }
             )
             .catch(function (ex) {
                 return callback(new Error(ex), null);
             }
         );













} catch (err) {
  console.error(err);
}

// const webpush = require('web-push');

// // VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();AIzaSyBGk_b52haMt3i1OKbX_cGSXywY26mL3CM

// webpush.setGCMAPIKey('AIzaSyBGk_b52haMt3i1OKbX_cGSXywY26mL3CM');
// webpush.setVapidDetails(
  // 'mailto:sk1044ag11@gmail.com',
  // vapidKeys.publicKey,
  // vapidKeys.privateKey
// );
// console.log(vapidKeys.publicKey);
// // This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
  // endpoint: 'https://fcm.googleapis.com/fcm/send/dLJST7b7RPw:APA91bHxe6I7gbUvwkF7fqige9MJhP5DSIG2FON-ZsHZXczcTVx-sNhWADv4UZbvl0kZ2XMxwBn-bFGU2ttlxwMbFDG7yW2UkHIe8Y0nDP0rWTQeJqxVdEkUDId8rJZvSIhIFqa_xZk7',
  // keys: {"p256dh":"BEvQmzoIEVVajlJvY-fG_NPT4LMOKLIoNNoVOpYPbGkhT3xUlzwikH11T40Os0s3HRQEKNhPiJhaqyoiegzwvNo=","auth":"AoMs2WJK_5cFRmwxdA-rHw=="}
// };





// webpush.sendNotification(pushSubscription, 'Your Push Payload Text');