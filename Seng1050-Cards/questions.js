// questions.js

const questions = [
  // Topic 1: The Internet: Concepts and Communication
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question: "Which of the following best describes the Internet?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question: "What is a disadvantage of Wide Area Networks (WANs)?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question: "In a Star network topology, how do all computers communicate?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which type of switching involves splitting a message into packets which are relayed, with no guarantee of delivery order?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question: "What is a primary disadvantage of Circuit Switching?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which of the following is a key characteristic of Transmission Control Protocol (TCP)?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question: "What is the main purpose of the Domain Name System (DNS)?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which HTTP status code category indicates that 'The action was successfully received, understood, and accepted'?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "A Local Area Network (LAN) is typically effective for interconnecting computing devices across geographically dispersed transnational companies.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "The Internet Backbone links carry the majority of traffic and are considered 'information superhighways'.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "In Message Switching, intermediate nodes store the entire message before forwarding it, which significantly speeds up transmission.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "IPv4 addresses are 128-bit identifiers, while IPv6 addresses are 32-bit identifiers.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "Simple Mail Transfer Protocol (SMTP) guarantees delivery time for emails.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "The World Wide Web (WWW) came into existence before the Internet.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "Define a Protocol in the context of the Internet, and provide two examples of Internet protocols mentioned in the sources.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question: "Describe the two key functions of a Router.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "Explain the concept of 'Overrun' in packet transmission, and state what happens to extra packets.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "Briefly explain how TCP and IP work together to transfer data, highlighting their individual roles.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "What are the two parts of an IP address as described in the sources?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "List three common HTTP request methods and their primary purpose.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "What are the three aspects of the World Wide Web (WWW) as defined by Tim Berners-Lee?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "In a Mesh network topology, each computer is connected to only its immediate neighbours.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "Briefly explain the concept of an Intranet and how its accessibility differs from the broader Internet.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which switching method involves the entire message being relayed, with no guarantee of delivery, and each intermediate node storing the entire message before forwarding?",
    options: [
      "Circuit Switching",
      "Message Switching",
      "Datagram Packet Switching",
      "Virtual Circuit Packet Switching",
    ],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "Circuit Switching is generally considered efficient in high-traffic networks because resources reserved for a connection can be used by other traffic during transmission.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "What is the primary disadvantage of Datagram Packet Switching concerning message integrity and order, and how is this often addressed?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which of the following is NOT a characteristic of the Transmission Control Protocol (TCP)?",
    options: [
      "Provides reliable communication",
      "Guarantees packets are received in the same order they were sent",
      "Enables two computers to exchange streams of data",
      "Is an unreliable protocol that allows packets to be lost, corrupted, or delivered out of order",
    ],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "User application software can freely use any port number from 0 to 65535, as none are specifically reserved for system processes.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "Explain why the Internet Protocol (IP) is described as 'unreliable'.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "How many bits does an IPv6 address use to identify each device, significantly increasing the number of available addresses compared to IPv4?",
    options: ["32 bits", "64 bits", "128 bits", "256 bits"],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "The Domain Name System (DNS) primarily provides a numerical equivalent for human-memorable IP addresses.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "What is the primary function of Simple Mail Transfer Protocol (SMTP) in the context of email communication on the Internet?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "In a typical Uniform Resource Locator (URL), which component identifies the specific file on the web server?",
    options: [
      "Protocol",
      "Web Server Computer Name",
      "Domain Name",
      "Web page File Name",
    ],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "In a domain name like 'www.newcastle.edu.au', the hierarchical structure is ordered from left-to-right, with the Top-level domain (TLD) being 'www'.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "Name the two main audiences a web designer must consider when creating a website, and briefly describe what each audience expects.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which of the following HTML elements is typically considered a void element because it does not have a closing tag and usually contains no content?",
    options: ["<p>", "<div>", "<br>", "<strong>"],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "The <meta> tag is primarily used to define the title of the HTML document, which is often displayed in the browser tab.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "What is the semantic difference between the HTML <strong> tag and the <b> tag, even if they often produce the same visual result by default?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which HTML tag is specifically designed to indicate text that is of particular relevance to the user, such as search terms, and is typically displayed as highlighted by default?",
    options: ["<strong>", "<em>", "<mark>", "<u>"],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "An HTML <span> element will automatically start a new block of text, similar to a <div> element, causing subsequent content to appear on a new line.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "Under what general circumstance should a web developer prefer using relative URLs over absolute URLs when creating hyperlinks within a website?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which two attributes are explicitly stated as required for the <img> tag in HTML to ensure proper functionality and accessibility?",
    options: [
      "width and height",
      "src and title",
      "src and alt",
      "alt and style",
    ],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "HTML elements displayed in the inline format normally begin and end with a new line when rendered by a browser.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which network topology uses a central switch, hub, or router for all communication between devices?",
    options: ["Bus", "Ring", "Star", "Tree"],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "In a Bus network topology, each computer is connected to its immediate neighbours, forming a continuous cycle for information relay.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "How does an Extranet primarily differ from an Intranet in terms of who can access it?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "What is the main function of a Virtual Private Network (VPN) as described in the sources?",
    options: [
      "To connect geographically close devices within a single department",
      "To allow a computer to securely access a company’s intranet from outside via the Internet",
      "To act as an information superhighway for the largest and fastest network links",
      "To store and forward entire messages between nodes in a network",
    ],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "A significant disadvantage of Message Switching is that it requires intermediate nodes to store the entire message, leading to higher storage requirements and slower transmissions.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "Identify two key disadvantages of Circuit Switching in the context of high-traffic networks.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which of the following is NOT one of the two key functions performed by a router in connecting networks?",
    options: [
      "Forwarding",
      "Routing",
      "Packet Fragmentation",
      "Traffic Management",
    ],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "When a router experiences an overrun due to too many incoming packets, the extra packets are typically held in a queue until the connection capacity becomes available.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "What specific action does the Internet Protocol (IP) take if an IP Datagram is too large for a particular network it needs to traverse?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "An IPv4 address is conceptually divided into two parts. What do these parts identify?",
    options: [
      "The protocol and the port number",
      "An Internet network number and the local number of a device within that network",
      "The subnet mask and the host identifier",
      "The domain name and the server name",
    ],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "Port number 80 is commonly reserved for HTTP (HyperText Transfer Protocol) communication.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "What specific range of port numbers is designated for use by user application software?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "If a local DNS server does not have the numerical IP address mapping for a human-memorable domain name, what action does it typically take next?",
    options: [
      "It immediately returns an error message to the client",
      "It fragments the domain name and sends parts to different servers",
      "It asks a root server to relay the information to the appropriate local server",
      "It stores the request until the mapping becomes available locally",
    ],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "The Simple Mail Transfer Protocol (SMTP) guarantees instantaneous delivery of emails, ensuring they arrive at the recipient as soon as they are sent.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "Briefly explain the store-and-forward model as it applies to email systems.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which HTTP request method is specifically used to include a body message, often for sending forms to the server?",
    options: ["GET", "HEAD", "POST", "TRACE"],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "An HTTP status code in the 5xx range (e.g., 500 Internal Server Error) indicates a client-side error like bad syntax in the request.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "What is the primary purpose of a Document Type Definition (DTD) placed at the top of an HTML document?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which HTML tag is used to indicate a piece of computer code within a document?",
    options: ["<samp>", "<kbd>", "<var>", "<code>"],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "In HTML5, the <cite> tag is primarily used to define a definition term, similar to how <dfn> is used.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "What is the semantic distinction between the HTML <b> tag and the <i> tag, even if they often produce the same visual result by default?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which set of HTML tags is used to create a description list, where terms are explicitly defined?",
    options: [
      "<ul> and <li>",
      "<ol> and <li>",
      "<dl>, <dt>, and <dd>",
      "<div>, <p>, and <span>",
    ],
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "True/False",
    question:
      "When creating hyperlinks within the same website, it is generally recommended to use absolute URLs rather than relative URLs to ensure portability when moving the website.",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Short Answer",
    question:
      "What is the purpose of the HTML id attribute when creating links to specific sections within a document, and what is a crucial rule for its value?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "Which of the following is considered an advantage of using XML for transmitting small amounts of data, compared to a relational database?",
    options: [
      "It provides multi-user write access control by default",
      "It typically requires more complex management overhead",
      "It is generally faster to access due to no database overhead",
      "It is always more secure than a database",
    ],
  },

  // Topic 2: HTML
  {
    topic: "HTML",
    type: "Multiple Choice",
    question:
      "Which of the following is an example of a Uniform Resource Name (URN)?",
  },
  {
    topic: "HTML",
    type: "Multiple Choice",
    question:
      "What is the primary function of HTML tags as originally proposed by Tim Berners-Lee?",
  },
  {
    topic: "HTML",
    type: "Multiple Choice",
    question:
      "Which HTML tag is a void element (does not have an end/closing tag)?",
  },
  {
    topic: "HTML",
    type: "Multiple Choice",
    question:
      "What is the intended purpose of the <strong> tag in HTML, according to semantic recommendations?",
  },
  {
    topic: "HTML",
    type: "Multiple Choice",
    question:
      "Why are relative URLs generally recommended for linking documents within your own website?",
  },
  {
    topic: "HTML",
    type: "True/False",
    question:
      "In an HTML document, the <head> element contains content that is typically displayed by the browser to the user.",
  },
  {
    topic: "HTML",
    type: "True/False",
    question:
      "The <b> and <i> HTML tags provide the same semantic meaning to web crawlers as <strong> and <em>, respectively.",
  },
  {
    topic: "HTML",
    type: "True/False",
    question: "The <img> tag is categorised as a block display element.",
  },
  {
    topic: "HTML",
    type: "True/False",
    question:
      "It is generally recommended to avoid setting both width and height attributes for <img> tags, as it can cause layout shifts.",
  },
  {
    topic: "HTML",
    type: "True/False",
    question:
      "An HTML element displayed with 'inline display' normally starts on a new line.",
  },
  {
    topic: "HTML",
    type: "Short Answer",
    question:
      "Explain the difference between a Uniform Resource Locator (URL) and a Uniform Resource Name (URN).",
  },
  {
    topic: "HTML",
    type: "Short Answer",
    question:
      "Why is it important for a web designer to consider both 'Humans' and 'Spiders, bots, web-crawlers' as audiences for a website?",
  },
  {
    topic: "HTML",
    type: "Short Answer",
    question:
      "List two HTML tags that typically belong inside the <head> element of an HTML document and briefly state their purpose.",
  },
  {
    topic: "HTML",
    type: "Short Answer",
    question:
      "Explain the semantic difference between <strong> and <b> tags, and <em> and <i> tags. When should <b> and <i> be used as a last resort?",
  },
  {
    topic: "HTML",
    type: "Short Answer",
    question:
      "Describe the purpose of the id attribute in HTML and state a key rule it must follow within a document.",
  },
  {
    topic: "HTML",
    type: "Short Answer",
    question:
      "When displaying images, why is it recommended to always set both the width and height attributes for the <img> tag?",
  },
  {
    topic: "HTML",
    type: "Short Answer",
    question:
      "Explain the importance of HTML validation and what can happen if an HTML page contains mistakes.",
  },

  // Topic 3: XML and DTD
  {
    topic: "XML and DTD",
    type: "Multiple Choice",
    question:
      "Which of the following is a primary reason why XML might be preferred over a database for transmitting small amounts of data?",
  },
  {
    topic: "XML and DTD",
    type: "Multiple Choice",
    question:
      "What does the term 'eXtensible' mean in eXtensible Markup Language (XML)?",
  },
  {
    topic: "XML and DTD",
    type: "Multiple Choice",
    question: "Which of the following is NOT a valid rule for XML tag names?",
  },
  {
    topic: "XML and DTD",
    type: "Multiple Choice",
    question: "In XML, what is the purpose of CDATA sections?",
  },
  {
    topic: "XML and DTD",
    type: "Multiple Choice",
    question:
      "What does the modifier '*' signify when declaring an element's children in a DTD (e.g., child*)?",
  },
  {
    topic: "XML and DTD",
    type: "True/False",
    question:
      "XML was designed to display data with a focus on how data is structured.",
  },
  {
    topic: "XML and DTD",
    type: "True/False",
    question:
      "An XML document can contain any user-defined data and structure.",
  },
  {
    topic: "XML and DTD",
    type: "True/False",
    question:
      "The XML declaration (<?xml version='1.0' encoding='utf-8'?>) does not require a closing tag and is not considered part of the XML document itself.",
  },
  {
    topic: "XML and DTD",
    type: "True/False",
    question:
      "In a DTD attribute declaration, #FIXED value indicates that the attribute value can be changed by the tag, but has a default.",
  },
  {
    topic: "XML and DTD",
    type: "True/False",
    question:
      "A document is considered valid XML if its syntax conforms to the XML specification, and its tags form a hierarchical tree with a single root node, regardless of whether it conforms to an associated DTD.",
  },
  {
    topic: "XML and DTD",
    type: "Short Answer",
    question:
      "Explain the fundamental difference in goals between XML and HTML.",
  },
  {
    topic: "XML and DTD",
    type: "Short Answer",
    question: "List three rules that XML tag names must follow.",
  },
  {
    topic: "XML and DTD",
    type: "Short Answer",
    question:
      "Describe the difference between Parsed Character Data (PCDATA) and Unparsed Data (CDATA) in XML documents. Provide a specific scenario where CDATA would be essential.",
  },
  {
    topic: "XML and DTD",
    type: "Short Answer",
    question:
      "What is the purpose of a Document Type Definition (DTD) in relation to an XML document? List three things a DTD describes.",
  },
  {
    topic: "XML and DTD",
    type: "Short Answer",
    question:
      "Explain the meaning of the #REQUIRED and #IMPLIED keywords when specifying XML element attributes in a DTD.",
  },
  {
    topic: "XML and DTD",
    type: "Short Answer",
    question:
      "What is an XML entity, and how is it declared and referenced in a DTD and XML document?",
  },
  {
    topic: "The Internet: Concepts and Communication",
    type: "Multiple Choice",
    question:
      "What is the primary characteristic that allows a Wide Area Network (WAN) to effectively serve large transnational companies?",
    options: [
      "It is cheap and easy to install",
      "It is geographically close and easy to maintain",
      "WAN transmissions don’t burden local LANs and route through special purpose computers",
      "It is controlled at the department/group level",
    ],
  },

  {
    topic: "Extensible Markup Language (XML)",
    type: "Multiple Choice",
    question:
      "Which of the following is an advantage of using XML for managing and transmitting small amounts of data, as opposed to a relational database?",
    options: [
      "XML is always more secure than a database",
      "XML typically requires more complex management overhead",
      "XML is generally faster to access due to no database overhead for small data",
      "XML ensures multi-user write access control by default",
    ],
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "True/False",
    question:
      "Unlike HTML, XML is case-insensitive, meaning that <Recipe> and <recipe> are treated as the same element by an XML parser.",
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "Short Answer",
    question:
      "According to XML rules, what crucial structural requirement must an XML document satisfy regarding its top-level container tag, besides the XML declaration?",
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "Multiple Choice",
    question:
      "In the XML declaration <?xml version='1.0' encoding='utf-8'?>, which component specifies the character encoding for the document?",
    options: ["version='1.0'", "encoding='utf-8'", "<?xml", "?>"],
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "True/False",
    question:
      "The content contained within a CDATA section in an XML document is parsed by the XML parser, which means special characters like & and < must be escaped.",
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "Short Answer",
    question:
      "Differentiate between a well-formed XML document and a valid XML document.",
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "Multiple Choice",
    question:
      "In a DTD attribute declaration, which keyword for default-value ensures that an attribute must always be supplied by the XML tag, otherwise the parser will return an error?",
    options: ["value", "#FIXED value", "#REQUIRED", "#IMPLIED"],
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "True/False",
    question:
      "When declaring an element in a DTD, the ANY keyword indicates that the element can contain any combination of parsed character data and other child elements.",
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "Short Answer",
    question:
      "What is an XML entity as declared in a DTD, and how does it provide a shortcut within the XML document?",
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "True/False",
    question:
      "An XML document must have its XML declaration (<?xml ... ?>) as the literal first line of the document, before any comments or newline characters.",
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "Short Answer",
    question:
      "In an XML document, when would a developer choose to use a CDATA section, and how does an XML parser treat the content within it?",
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "Multiple Choice",
    question:
      "In a DTD, which keyword is used to declare an element that explicitly contains only parsed character data?",
    options: ["EMPTY", "#PCDATA", "ANY", "REQUIRED"],
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "True/False",
    question:
      "In a DTD, an attribute declared with #FIXED value can be easily changed by supplying a different value for that attribute within the XML tag.",
  },
  {
    topic: "Extensible Markup Language (XML)",
    type: "Short Answer",
    question:
      "In a DTD, how would you declare an element named container that must contain a item element, and then zero or one note elements, in that specific order?",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Multiple Choice",
    question:
      "Which of the following CSS application methods has the highest priority in the cascading order, directly overriding embedded and external styles?",
    options: [
      "Browser default style sheet",
      "External style files",
      "Embedded (document-level) styles",
      "Inline styles",
    ],
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "True/False",
    question:
      "An external CSS style file should include the <style> and <head> tags to properly define the stylesheets for the linked HTML document.",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Short Answer",
    question:
      "Explain the purpose of the CSS selector div > p and how it differs from div p.",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Multiple Choice",
    question:
      "Which CSS unit is considered a relative unit because it scales with the current window's height?",
    options: ["px", "cm", "rem", "vh"],
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "True/False",
    question:
      "In the CSS Box Model, the margin property is used to add spacing between the content area and the border area of an element.",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Short Answer",
    question:
      "Briefly explain the three categories (from most to least specific) that CSS uses to determine specificity when resolving conflicting rules for an HTML element.",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Multiple Choice",
    question:
      "To represent a colour with maximum blue intensity, no red, and no green using a hexadecimal colour code, which of the following is correct?",
    options: ["#FF0000", "#00FF00", "#0000FF", "#FFFFFF"],
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "True/False",
    question:
      "The CSS float property ensures that block-level elements will automatically wrap around a floated element.",
  },

  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Multiple Choice",
    question:
      "Which of the following is NOT listed as a common drawback of using CSS?",
    options: [
      "Not every property applies to every tag",
      "Users can override CSS rules at the browser level",
      "It mixes semantics with visual formatting, making maintenance difficult",
      "Not every browser supports every property or value",
    ],
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "True/False",
    question:
      "An external CSS style file should include the <style> and <head> tags to properly define the stylesheets for the linked HTML document.",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Short Answer",
    question:
      "What is the primary purpose of a CSS reset file, and where should it typically be linked in an HTML document?",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Multiple Choice",
    question:
      "Which CSS selector targets an element that immediately follows another element (e.g., a p tag immediately after a div tag)?",
    options: ["div p", "div > p", "div + p", "div ~ p"],
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "True/False",
    question:
      "In the CSS Box Model, the width and height properties, by default, apply to the entire element's box, including its padding and border areas.",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Short Answer",
    question:
      "Explain the difference in how display: block and display: inline-block elements behave regarding their width and height properties when rendered in normal document flow.",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Multiple Choice",
    question:
      "Which CSS positioning scheme removes an element from the normal document flow and positions it relative to its nearest non-static parent or, failing that, the root element?",
    options: ["static", "relative", "absolute", "fixed"],
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "True/False",
    question:
      "When using the CSS float property, block-level elements will automatically wrap around the floated element, similar to how text wraps.",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Short Answer",
    question:
      "Describe the behaviour of an element with position: sticky as it relates to scrolling and its specified top, bottom, left, or right threshold.",
  },
  {
    topic: "Cascading Style Sheets (CSS)",
    type: "Multiple Choice",
    question:
      "Which HTML5 semantic structural element is specifically intended for a block of major navigation links within a document?",
    options: ["<header>", "<footer>", "<nav>", "<aside>"],
  },
];

// Export for ES6 modules if needed
// export default questions;
