// META: script=/resources/WebIDLParser.js
// META: script=/resources/idlharness.js

'use strict';

idl_test(
  ['xslt'],
  ['html'],
  async idlArray => {
    idlArray.add_objects({
      XSLTProcessor: ['processor']
    });
    self.processor = new XSLTProcessor();
  }
);
