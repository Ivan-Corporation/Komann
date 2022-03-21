import { ConfigService } from '@nestjs/config';
import { ITelegramOptions } from 'src/telegram/telegram.interface';

export const getTelegramConfig = (configService: ConfigService): ITelegramOptions => {
	const token = configService.get('5257199431:AAFuuYFAw7pNklIV0zYDRpvwv3JgzTdx9WI');
	if (!token) {
		throw new Error('TELEGRAM_TOKEN не задан')
	}
	return {
		token,
		chatId: configService.get('604088676') ?? ''
	};
};