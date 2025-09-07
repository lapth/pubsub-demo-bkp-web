import { Client, IMessage } from 'iframe-pubsub';
import { useEffect, useState } from 'react';

const pageId = 'sub-comp'

export default function SubComponent() {
  const [client] = useState(() => new Client(pageId));

  const handleSendPrompt = (prompt: string) => {
    client.sendMessage('aichat-aiwb', prompt);
  };

  return (
    <div>
      <h3>Sub Component [{pageId}]</h3>
      <div>
        <button onClick={() => handleSendPrompt('Test ' + (new Date().getTime().toString()))}>Send Prompt</button>
      </div>
    </div>
  );
}
