import { createConsumer } from '@rails/actioncable';

const URL = 'ws://be-greek-god-bod.herokuapp.com/cable';

const consumer = createConsumer(URL);

export default consumer;
