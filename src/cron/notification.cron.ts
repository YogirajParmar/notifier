import cron from 'node-cron';
import { User, PUC } from '@entities';
import { sendNotification } from '@helpers';
import moment from 'moment';

cron.schedule('0 0 * * *', async () => {
    const targetDate = moment().add(5, 'days').toDate();

const expiringPucs = await PUC.findAll({
    where: {
      expiryDate: targetDate
    },
    include: [{
      model: User,
      as: 'user',
      attributes: ['email'],
    }]
  });
    expiringPucs.forEach(async (puc) => {
        const user = puc.dataValues.user;
    const message = `Your PUC for vehicle ${puc.dataValues.vehicleNumber} is expiring on ${moment(puc.dataValues.expirationDate).format('YYYY-MM-DD')}. Please renew it.`;

    await sendNotification(user.email, message);
    });
})