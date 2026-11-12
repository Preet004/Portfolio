import jsPDF from 'jspdf';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

export const generateResumePdf = (track: 'fullstack' | 'systems'): void => {
  const doc = new jsPDF({
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = 16;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 14) {
      doc.addPage();
      y = 16;
    }
  };

  // Helper for Section Titles
  const addSectionTitle = (title: string) => {
    checkPageBreak(10);
    y += 2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text(title.toUpperCase(), margin, y);
    y += 1.8;
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.4);
    doc.line(margin, y, pageWidth - margin, y);
    y += 4.5;
  };

  // Helper for Bullet Points
  const addBullet = (text: string, indent = 4) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(51, 65, 85); // slate-700
    const lines = doc.splitTextToSize(text, contentWidth - indent - 4);
    checkPageBreak(lines.length * 4.2 + 2);
    
    // Bullet symbol
    doc.text('•', margin + indent, y);
    doc.text(lines, margin + indent + 3.5, y);
    y += lines.length * 4.2 + 1;
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(CANDIDATE_PROFILE.name.toUpperCase(), margin, y);
  y += 5.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(2, 132, 199); // sky-600
  const subtitle = track === 'fullstack'
    ? 'FULL STACK DEVELOPER & AI/ML SYSTEMS ENGINEER'
    : 'COMPUTER SCIENCE & ENTERPRISE NETWORK INFRASTRUCTURE ENGINEER';
  doc.text(subtitle, margin, y);
  y += 5;

  // Contact line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105); // slate-600
  const contactText = `${CANDIDATE_PROFILE.phone}  |  ${CANDIDATE_PROFILE.email}  |  Bengaluru, India`;
  doc.text(contactText, margin, y);
  y += 4;
  const linksText = `LinkedIn: linkedin.com/in/preet-mishra-a35ab922a  |  GitHub: github.com/Preet004`;
  doc.text(linksText, margin, y);
  y += 6;

  if (track === 'fullstack') {
    // === TRACK A: FULL STACK & AI/ML ===
    
    // Education
    addSectionTitle('Education');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('AMC Engineering College', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Bengaluru, India', pageWidth - margin, y, { align: 'right' });
    y += 4.5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.text('Bachelor of Engineering in Computer Science (CGPA: 8.27 / 10)', margin, y);
    doc.text('Dec 2021 – Jul 2025', pageWidth - margin, y, { align: 'right' });
    y += 6;

    // Experience
    addSectionTitle('Professional & Internship Experience');

    // 1. Ollasoftware
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('AI & Systems Intern — Ollasoftware (Victor Chasex Pvt. Ltd.)', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Aug 2026', pageWidth - margin, y, { align: 'right' });
    y += 4.5;
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text('Bengaluru, India (HSR Layout) — Verified by CEO Vikas Swami [NDA Compliant Telemetry]', margin, y);
    y += 4;
    addBullet('Contributed to core telemetry engines for whatping.com (latency probe diagnostics) and 24observe.com (24/7 uptime monitoring) under strict NDA confidentiality.');
    addBullet('Engineered high-frequency synthetic ICMP/HTTP network latency probing routines and real-time status telemetry aggregation.');
    addBullet('Designed automated incident anomaly detection heuristics and uptime monitoring alert dispatchers.');
    y += 2;

    // 2. Varcons Technologies
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Full Stack Developer Intern — Varcons Technologies', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Sept 2024 – Jan 2025', pageWidth - margin, y, { align: 'right' });
    y += 4.5;
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text('Bengaluru, India', margin, y);
    y += 4;
    addBullet('Developed and maintained responsive web applications, collaborating with senior engineers on RESTful services and database management.');
    addBullet('Implemented user authentication, scalable state management (Redux/Context API), and reusable component libraries.');
    addBullet('Applied Git/GitHub version control workflows and Agile sprint ceremonies for reliable release cycles.');
    y += 2;

    // 3. Internstech
    checkPageBreak(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Web Developer Intern — Internstech', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Feb 2024 – Mar 2024', pageWidth - margin, y, { align: 'right' });
    y += 4.5;
    addBullet('Built full-stack application using MERN stack, improving internal department workflow efficiency.');
    addBullet('Designed and deployed company landing page, achieving a 10% surge in web traffic.');
    addBullet('Integrated contact and feedback mechanisms with automated webhook email notifications.');
    y += 2;

    // 4. Yhills
    checkPageBreak(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('AI / ML Intern — Yhills', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Mar 2022 – Apr 2022', pageWidth - margin, y, { align: 'right' });
    y += 4.5;
    addBullet('Processed urban trip datasets, engineering geospatial & temporal features via Haversine distance calculations.');
    addBullet('Trained and benchmarked regression models (XGBoost, Random Forest), achieving 15% RMSE optimization over baseline.');
    addBullet('Visualized geospatial pickup/drop-off densities and deployed interactive Streamlit dashboard.');
    y += 3;

    // Projects
    addSectionTitle('Select Projects & Production Deployments');

    const projectsList = [
      {
        title: 'WhatPing & 24Observe (whatping.com & 24observe.com)',
        tech: 'Distributed Probes, Uptime Telemetry, Ollasoftware, NDA Cleared',
        desc: 'Engineered synthetic ICMP/HTTP ping probing engine and continuous 24/7 infrastructure observability platform with sub-second alert routing.'
      },
      {
        title: 'CricPrec (Live at cricprec.ai.studio)',
        tech: 'Google AI Studio, Gemini 2.5 API, React 19, TypeScript',
        desc: 'Predictive cricket intelligence engine with real-time match forecasting, momentum drift analytics, and sub-second generative commentary.'
      },
      {
        title: 'Project-IL (Live at preet004.github.io/Project-IL)',
        tech: 'JavaScript (ESNext), HTML5 Canvas, GitHub Pages',
        desc: 'Interactive visual algorithms playground with 60 FPS requestAnimationFrame rendering and lightweight client architecture.'
      },
      {
        title: 'ShopSphere',
        tech: 'MongoDB, Express.js, React, Node.js, Redux Toolkit',
        desc: 'Scalable e-commerce engine with JWT authentication, compound index search queries, and responsive administrative dashboards.'
      },
      {
        title: 'BugSense',
        tech: 'Python 3.12, Gemini LLM, AST Analysis',
        desc: 'Autonomous AI code debugger analyzing syntax trees, runtime tracebacks, and synthesizing automatic patches with 92% confidence.'
      }
    ];

    projectsList.forEach(p => {
      checkPageBreak(16);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(p.title, margin, y);
      y += 4;
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8.5);
      doc.setTextColor(2, 132, 199);
      doc.text(p.tech, margin, y);
      y += 4;
      addBullet(p.desc);
      y += 1.5;
    });

    // Technical Skills
    addSectionTitle('Technical Skills Matrix');
    checkPageBreak(25);
    const skills = [
      { label: 'Languages', val: 'TypeScript, JavaScript (ES6+), Python 3.12, Java, Node.js, SQL, HTML5, CSS3' },
      { label: 'Frontend & UI', val: 'React 18/19, Next.js, Redux Toolkit, Context API, Tailwind CSS, Material-UI, Vite' },
      { label: 'Backend & APIs', val: 'Node.js, Express.js, REST APIs, Microservices, Django, WebSockets, JWT' },
      { label: 'Databases & Cloud', val: 'MongoDB, PostgreSQL, MySQL, Redis, Docker, Git, GitHub CI/CD, Postman, Linux' },
      { label: 'AI/ML & Systems', val: 'Google AI Studio, Gemini API, XGBoost, Random Forest, WhatPing & 24Observe Telemetry' }
    ];

    skills.forEach(s => {
      checkPageBreak(6);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(`${s.label}: `, margin, y);
      const labelWidth = doc.getTextWidth(`${s.label}: `);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      const valLines = doc.splitTextToSize(s.val, contentWidth - labelWidth);
      doc.text(valLines, margin + labelWidth, y);
      y += valLines.length * 4.2 + 1;
    });

  } else {
    // === TRACK B: SYSTEMS & NETWORK INFRASTRUCTURE ===
    
    // Summary
    addSectionTitle('Professional Summary');
    const summaryText = 'Computer Science graduate with deep practical mastery of computer networks, routing, switching, and production observability infrastructure. Completed engineering internship at Ollasoftware contributing to whatping.com and 24observe.com under NDA. Experienced in designing enterprise campus topologies, configuring VLANs, dynamic routing protocols (OSPF, EIGRP), access control policies, and analyzing network traffic using Wireshark, GNS3, and Cisco Packet Tracer.';
    const sumLines = doc.splitTextToSize(summaryText, contentWidth);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(51, 65, 85);
    doc.text(sumLines, margin, y);
    y += sumLines.length * 4.2 + 4;

    // Technical Skills
    addSectionTitle('Networking & Systems Core Competencies');
    const netSkills = [
      { label: 'Observability & Monitoring', val: 'whatping.com (Synthetic Ping Engine), 24observe.com (24/7 Uptime Telemetry), Ollasoftware' },
      { label: 'Networking Protocols', val: 'TCP/IP, IPv4/IPv6, Subnetting, VLSM, VLANs, Inter-VLAN Routing (802.1Q), STP, VTP, HSRP' },
      { label: 'Routing Protocols', val: 'OSPF Dynamic Path Election, EIGRP, RIP, BGP Fundamentals' },
      { label: 'Network Security', val: 'Standard & Extended ACLs, NAT/PAT, VPN Fundamentals, Port Security, DHCP Snooping' },
      { label: 'Tools & Environments', val: 'Cisco Packet Tracer, GNS3, Wireshark, Cisco IOS, Linux (Ubuntu/Red Hat), Windows Server' },
      { label: 'Diagnostic Skills', val: 'Packet Forensics, Wireshark Filters, Root Cause Analysis, Incident Troubleshooting' }
    ];

    netSkills.forEach(s => {
      checkPageBreak(6);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(`${s.label}: `, margin, y);
      const labelWidth = doc.getTextWidth(`${s.label}: `);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      const valLines = doc.splitTextToSize(s.val, contentWidth - labelWidth);
      doc.text(valLines, margin + labelWidth, y);
      y += valLines.length * 4.2 + 1;
    });

    y += 2;

    // Experience
    addSectionTitle('Systems Engineering & Internship Experience');

    // Ollasoftware
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Production Observability & Systems Intern — Ollasoftware', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Aug 2026', pageWidth - margin, y, { align: 'right' });
    y += 4.5;
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text('Bengaluru, India (HSR Layout) — Verified by Founder Vikas Swami [NDA Cleared]', margin, y);
    y += 4;
    addBullet('Engineered synthetic latency probe daemons for whatping.com measuring ICMP ping, jitter, and packet loss metrics under NDA confidentiality.');
    addBullet('Contributed to 24/7 infrastructure observability pipelines for 24observe.com with real-time health aggregation.');
    addBullet('Collaborated with Victor Chasex Pvt. Ltd. / Ollasoftware engineering leads on resilient network monitoring architectures.');
    y += 2;

    // Projects
    addSectionTitle('Network Engineering Projects');

    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Enterprise Campus Network Design & Hardening', margin, y);
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(2, 132, 199);
    y += 4;
    doc.text('Cisco Packet Tracer, GNS3, OSPF, VLANs, Router-on-a-Stick, ACLs, NAT/PAT', margin, y);
    y += 4;
    addBullet('Designed and implemented a multi-department enterprise campus network using Cisco Packet Tracer.');
    addBullet('Configured VLANs (Sales, Engineering, Management) and Router-on-a-Stick Inter-VLAN routing (802.1Q subinterfaces) for secure traffic segmentation.');
    addBullet('Implemented OSPF dynamic routing with cost tuning for redundant path failover and scalable communication.');
    addBullet('Applied Standard and Extended ACLs to secure critical resources and restrict unauthorized access.');
    addBullet('Configured DHCP, NAT, and PAT (Port Address Translation) services for automated addressing and internet connectivity.');
    y += 3;

    checkPageBreak(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Network Traffic Analysis & Wireshark Forensic Suite', margin, y);
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(2, 132, 199);
    y += 4;
    doc.text('Wireshark, Python (Scapy), TCP/IP Stack, Linux Networking, DHCP / DNS', margin, y);
    y += 4;
    addBullet('Captured and analyzed network packets using Wireshark to inspect TCP 3-way handshakes, window scaling, DNS resolution, and DHCP DORA flows.');
    addBullet('Investigated connectivity bottlenecks caused by IP conflicts, incorrect subnet masks, and routing loops.');
    addBullet('Diagnosed Layer 2 switching anomalies including Spanning Tree Protocol (STP) loops and VLAN misconfigurations.');
    y += 3;

    // Education
    addSectionTitle('Education & Academics');
    checkPageBreak(18);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('AMC Engineering College', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Bengaluru, India', pageWidth - margin, y, { align: 'right' });
    y += 4.5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.text('Bachelor of Engineering in Computer Science (CGPA: 8.27 / 10)', margin, y);
    doc.text('Graduation: 2025', pageWidth - margin, y, { align: 'right' });
    y += 4.5;
    addBullet('Key Coursework: Computer Networks, Operating Systems, Network Security, Distributed Systems, Data Structures & Algorithms.');
  }

  // Footer metadata
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(
      `Preet Mishra — Curriculum Vitae (${track === 'fullstack' ? 'Full Stack & AI' : 'Systems & Networks'})  |  Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 6,
      { align: 'center' }
    );
  }

  const fileName = track === 'fullstack'
    ? 'Preet_Mishra_FullStack_AI_Resume.pdf'
    : 'Preet_Mishra_Network_Systems_Resume.pdf';

  doc.save(fileName);
};

export const printResumeViaIframe = (resumeHtmlContent: string): void => {
  // Create an invisible iframe specifically for printing to avoid dark theme/dialog interference
  const existingFrame = document.getElementById('resume-print-iframe');
  if (existingFrame) {
    existingFrame.remove();
  }

  const printIframe = document.createElement('iframe');
  printIframe.id = 'resume-print-iframe';
  printIframe.style.position = 'fixed';
  printIframe.style.right = '0';
  printIframe.style.bottom = '0';
  printIframe.style.width = '0';
  printIframe.style.height = '0';
  printIframe.style.border = '0';

  document.body.appendChild(printIframe);

  const doc = printIframe.contentWindow?.document;
  if (!doc) {
    window.print();
    return;
  }

  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Preet Mishra - Resume</title>
        <style>
          @page {
            size: A4;
            margin: 15mm 18mm;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            color: #1e293b;
            background: #ffffff;
            margin: 0;
            padding: 0;
            font-size: 11pt;
            line-height: 1.45;
          }
          h1 {
            margin: 0 0 2px 0;
            font-size: 22pt;
            color: #0f172a;
            text-align: center;
          }
          .subtitle {
            text-align: center;
            font-size: 10pt;
            font-weight: bold;
            color: #0284c7;
            margin-bottom: 6px;
          }
          .contacts {
            text-align: center;
            font-size: 9pt;
            color: #475569;
            margin-bottom: 14px;
          }
          h3 {
            font-size: 11pt;
            font-weight: bold;
            color: #0f172a;
            border-bottom: 1.5px solid #cbd5e1;
            padding-bottom: 2px;
            margin-top: 14px;
            margin-bottom: 6px;
            text-transform: uppercase;
          }
          .item-header {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 10pt;
            color: #0f172a;
            margin-top: 6px;
          }
          .item-sub {
            font-size: 9pt;
            color: #64748b;
            margin-bottom: 3px;
          }
          ul {
            margin: 3px 0 8px 18px;
            padding: 0;
          }
          li {
            font-size: 9.5pt;
            color: #334155;
            margin-bottom: 2px;
          }
          .skill-line {
            font-size: 9.5pt;
            margin-bottom: 3px;
          }
          .skill-line strong {
            color: #0f172a;
          }
        </style>
      </head>
      <body>
        ${resumeHtmlContent}
      </body>
    </html>
  `);
  doc.close();

  // Trigger print after iframe renders
  setTimeout(() => {
    try {
      printIframe.contentWindow?.focus();
      printIframe.contentWindow?.print();
    } catch (e) {
      console.warn('Iframe print failed, falling back to window.print()', e);
      window.print();
    }
  }, 250);
};
