import 'dotenv/config';

const port = process.env.APP_PORT;
const url = `${process.env.APP_URL}:${port}`;

export default {
	port,
	url,
};
