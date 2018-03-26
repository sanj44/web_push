const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setGCMAPIKey('AIzaSyAzJetKzrtOUnt-T9Zu-SnUokLBHJD8OWM');
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/dLJST7b7RPw:APA91bHxe6I7gbUvwkF7fqige9MJhP5DSIG2FON-ZsHZXczcTVx-sNhWADv4UZbvl0kZ2XMxwBn-bFGU2ttlxwMbFDG7yW2UkHIe8Y0nDP0rWTQeJqxVdEkUDId8rJZvSIhIFqa_xZk7',
  keys: {"p256dh":"BEvQmzoIEVVajlJvY-fG_NPT4LMOKLIoNNoVOpYPbGkhT3xUlzwikH11T40Os0s3HRQEKNhPiJhaqyoiegzwvNo=","auth":"AoMs2WJK_5cFRmwxdA-rHw=="}
}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');