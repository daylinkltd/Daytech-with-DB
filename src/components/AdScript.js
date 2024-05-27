"use client"
// components/AdScript.js
import React, { useEffect } from 'react';

const AdScript = () => {
  useEffect(() => {
    (function (d, z, s) {
      s.src = 'https://' + d + '/400/' + z;
      try {
        (document.body || document.documentElement).appendChild(s);
      } catch (e) {}
    })('cupoabie.net', 7153524, document.createElement('script'));
  }, []);

  return null; // Since this component only adds a script and doesn't render any UI, return null
};

export default AdScript;


