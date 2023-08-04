import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const Documentation: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Fetch the Markdown file from the public directory
    axios.get('/readme.md').then((response) => {
      setMarkdownContent(response.data);
    }).catch((error) => {
      console.error('An error occurred while loading the document:', error);
    });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <ReactMarkdown
        components={{
          code: ({ node, className, ...props }) => (
            <pre style={{ background: 'black', padding: '15px', borderRadius: '5px' }}>
              <code style={{ color: 'white' }} className={className} {...props} />
            </pre>
          ),
          h1: ({ node, ...props }) => <h1 style={{ fontSize: '2rem', borderBottom: '1px solid #ccc' }} {...props} />,
          h2: ({ node, ...props }) => <h2 style={{ fontSize: '1.75rem' }} {...props} />,
          h3: ({ node, ...props }) => <h3 style={{ fontSize: '1.5rem' }} {...props} />,
          // Add more styling for other elements as needed
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default Documentation;
