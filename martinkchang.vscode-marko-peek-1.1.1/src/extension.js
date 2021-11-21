'use strict';
const vscode = require('vscode');
const PeekFileDefinitionProvider = require('./PeekFileDefinitionProvider');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
module.exports.activate = context => {
    let config = vscode.workspace.getConfiguration('vscode-marko-peek');
    let activeLanguages = config.get('activeLanguages');
    let searchFileExtensions = config.get('searchFileExtensions');

    const peek_filter = activeLanguages.map((language) => {
        return {
            language: language,
            scheme: 'file'
        };
    });

    context.subscriptions.push(vscode.languages.registerDefinitionProvider(peek_filter,
        new PeekFileDefinitionProvider(searchFileExtensions)));
}

// this method is called when your extension is deactivated
module.exports.deactivate = () => {
}
