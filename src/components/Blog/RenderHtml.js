
// import { DOMPurify } from 'dompurify';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // Example theme

// const RenderHtml = ({ content }) => {
//   // Check if content is defined
//   if (!content) {
//     return null; // Or handle the case when content is undefined
//   }

//   // Sanitize HTML (optional, recommended)
//   let sanitizedContent;
//   if (typeof content === 'string') {
//     sanitizedContent = DOMPurify.sanitize(content, {
//       ALLOWED_TAGS: [], // No tags allowed for plain text
//       ALLOWED_ATTRS: [], // No attributes allowed for plain text
//     });
//   } else {
//     // Assuming content is already sanitized HTML
//     sanitizedContent = content;
//   }

//   // Function to identify code blocks (adjust as needed)
//   const codeBlockRegex = /<pre><code>(.+?)<\/code><\/pre>/gs;

//   // Function to replace code blocks with highlighted components
//   const replaceCodeBlocks = (html) => {
//     return html.replace(codeBlockRegex, (match, code) => {
//       // Extract language from comments within the code block (optional)
//       const languageMatch = g.exec(code); // Assuming g is a valid regex object
//       const language = languageMatch ? languageMatch[1] : undefined;

//       return (
//         <SyntaxHighlighter language={language} style={atomDark}>
//           {code.trim()}
//         </SyntaxHighlighter>
//       );
//     });
//   };

//   const highlightedContent = replaceCodeBlocks(sanitizedContent);

//   return (
//     <div className='col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max'>
//       <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />
//     </div>
//   );
// };

// export default RenderHtml;
