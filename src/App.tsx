import { PubSub } from 'iframe-pubsub';
import { useEffect } from 'react';
import SubComponent from './SubComponent';

const urlParams = new URLSearchParams(window.location.search);
const aiwbUrl = urlParams.get('aiwbUrl') || (new Date().getTime().toString());
const acUrl = urlParams.get('acUrl') || (new Date().getTime().toString());

export default function App() {
  useEffect(() => {
    // ⭐️⭐️⭐️ Initialize PubSub, that's all you need ⭐️⭐️⭐️
    PubSub.getInstance()
  }, [])

  return (
    <div>
      <h1>AIChat Microservice Demo</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>AIWB (Iframe)</h3>
          <iframe
            src={`${aiwbUrl}?acUrl=${acUrl}`}
            style={{ width: '600px', height: '800px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h3>AIChat (Iframe)</h3>
          <iframe
            src={`${acUrl}?acId=aichat-main`}
            style={{ width: '600px', height: '800px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
      </div>

      <SubComponent></SubComponent>
    </div>
  );
}
