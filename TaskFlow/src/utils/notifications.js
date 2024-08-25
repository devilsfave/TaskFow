import * as Notifications from 'expo-notifications';

export async function scheduleNotification(task) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: Reminder: ,
      body: Don't forget to complete your task by .,
    },
    trigger: {
      seconds: 60, // Reminder in 1 minute for demo purposes
    },
  });
}
