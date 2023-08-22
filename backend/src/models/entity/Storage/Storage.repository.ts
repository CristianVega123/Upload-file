import { Storage } from './Storage'
import { AppDataSource } from '../../data-source'

export const userRepository = AppDataSource.getRepository(Storage);
