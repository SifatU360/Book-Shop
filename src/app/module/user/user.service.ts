import { TRegister } from '../../types/global';
import { User } from './user.model';

const RegisterUserIntoDB = async ({ name, email, password }: TRegister) => {
  const result = await User.create({
    email,
    password,
    name,
  });
  return result;
};

const RetriveAllUserFromDB = async () => {
  const result = await User.find({});
  return result;
};

const activateUser = async (id: string) => {
  const result = await User.findByIdAndUpdate(id, { activity: 'activated' });
  return result;
};

const deactivateUser = async (id: string) => {
  const result = await User.findByIdAndUpdate(id, { activity: 'deactivated' });
  return result;
};

export const UserServices = {
  RegisterUserIntoDB,
  RetriveAllUserFromDB,
  activateUser,
  deactivateUser,
};