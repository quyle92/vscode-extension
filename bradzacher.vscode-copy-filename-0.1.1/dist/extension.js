"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const path = __importStar(require("path"));
const vscode = __importStar(require("vscode"));
async function showError(message) {
    await vscode.window.showErrorMessage(`Copy filename: ${message}`);
}
function showWarning(message) {
    vscode.window.setStatusBarMessage(`${message}`, 3000);
}
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // Register context menu commands
    context.subscriptions.push(vscode.commands.registerCommand('extension.copyFileName', (uri, files) => doCopy(getUris(uri, files), true)));
    context.subscriptions.push(vscode.commands.registerCommand('extension.copyFileNameNoExtension', (uri, files) => doCopy(getUris(uri, files), false)));
    // Register command pallette commands
    context.subscriptions.push(vscode.commands.registerCommand('extension.copyFileNameOfActiveFile', () => doCopy(getActiveUri(), true)));
    context.subscriptions.push(vscode.commands.registerCommand('extension.copyFileNameNoExtensionOfActiveFile', () => doCopy(getActiveUri(), false)));
}
exports.activate = activate;
function getUris(uri, files) {
    if (typeof files !== 'undefined' && files.length > 0) {
        return files;
    }
    return [uri];
}
function getActiveUri() {
    const activeTextEditor = vscode.window.activeTextEditor;
    if (typeof activeTextEditor === 'undefined') {
        return null;
    }
    return [activeTextEditor.document.uri];
}
function doCopy(uris, includeExtension) {
    if (uris == null) {
        return;
    }
    const accumulator = uris
        .map(uri => getFilename(uri, includeExtension))
        .join('\n');
    // Copy text to the clipboard
    vscode.env.clipboard.writeText(accumulator).then(() => showWarning(`The filename${uris.length > 1 ? 's have' : ' has'} been copied to clipboard`), async (err) => showError(String(err)));
}
function getFilename(uri, includeExtension) {
    const relative = vscode.workspace.asRelativePath(uri);
    const parsed = path.parse(relative);
    if (includeExtension) {
        return parsed.base;
    }
    return parsed.name;
}
//# sourceMappingURL=extension.js.map