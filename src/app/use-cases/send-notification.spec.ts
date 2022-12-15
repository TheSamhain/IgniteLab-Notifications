import { InMemoryNotifcationsRepostitory } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
	it('should be able to send a notification', async () => {
		const notificationsRepository = new InMemoryNotifcationsRepostitory();
		const sendNotification = new SendNotification(notificationsRepository);

		const { notification } = await sendNotification.execute({
			content: 'This is a test notification',
			category: 'some-category',
			recipientId: 'some-recipient-id',
		});

		expect(notificationsRepository.notifications).toHaveLength(1);
		expect(notificationsRepository.notifications[0]).toEqual(notification);
	});
});
