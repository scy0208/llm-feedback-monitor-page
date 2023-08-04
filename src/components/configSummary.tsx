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
    <div>
      <ReactMarkdown children={markdownContent} />
    </div>
  );
};

export default Documentation;
