import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';

const lambdaClient = new LambdaClient({ region: 'us-west-2' });

export default async function handler(req, res) {
    if (req.method === 'POST') {
        
        try {
            const params = {
                FunctionName: 'on-user-message', // Replace with your Lambda function name
                Payload: JSON.stringify({ key: 'value' }), // Replace with your payload
            };
    
            const command = new InvokeCommand(params);
            const response = await lambdaClient.send(command);
    
            console.log('Lambda response:', response);
            res.status(200).json({ message: `Lambda called successfully! response: {response}` });

        } catch (error) {
            const msg = error.message;
            res.status(200).json({ message: `Error: ${msg}` });
            console.error('Error invoking Lambda:', error.message);
            console.error('Error details:', error);
        }
        /*
        const params = {
            FunctionName: 'my-lambda-function',
            Payload: JSON.stringify({ key: 'value' }),
        };
        const command = new InvokeCommand(params);
        const response = await lambdaClient.send(command);
        console.log(new TextDecoder().decode(response.Payload));*/
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
