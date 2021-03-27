import boto3

sqs = boto3.resource('sqs')
queue = sqs.get_queue_by_name(QueueName='scsqslamdastack-queue')

for i in range(10):
    queue.send_message(MessageBody=str(i))