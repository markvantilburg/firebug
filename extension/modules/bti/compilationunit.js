/* See license.txt for terms of usage */

// ************************************************************************************************
// Module

var EXPORTED_SYMBOLS = ["CompilationUnit"];

// ************************************************************************************************
// Compilation Unit

/**
 * Describes a compilation unit in a browser context. A compilation unit
 * may originate from a JavaScript source file or a script element in HTML.
 * 
 * @constructor
 * @param url compilation unit URL - a {@link String} or <code>null</code> if none
 * @param context the {@link BrowserContext} this compilation unit is contained in
 * @type CompilationUnit
 * @return a new CompilationUnit
 * @version 1.0
 */
function CompilationUnit(url, context)
{
    this.url = url;
    this.context = context;
    this.breakpoints = [];
}

// ************************************************************************************************
// API

/**
 * Returns the URL of this compilation unit.
 * <p>
 * This function does not require communication with
 * the browser.
 * </p>
 * 
 * @function
 * @returns compilation unit identifier as a {@link String}
 */
CompilationUnit.prototype.getURL = function()
{
    return this.url;
};

/**
 * Returns the browser context this compilation unit was compiled in.
 * <p>
 * This function does not require communication with
 * the browser.
 * </p>
 * 
 * @function
 * @returns a {@link BrowserContext}
 */
CompilationUnit.prototype.getBrowserContext = function()
{
    return this.context;
};

/**
 * Returns the breakpoints that have been created in this compilation unit and
 * have not been cleared.
 * <p>
 * This function does not require communication with
 * the browser.
 * </p>
 * @function
 * @returns an array of {@link Breakpoint}'s
 */
CompilationUnit.prototype.getBreakpoints = function()
{
    // return a copy of scripts so the master copy is not corrupted
    var bps = [];
    for ( var i = 0; i < this.breakpoints.length; i++)
        bps.push(this.breakpoints[i]);
    return bps;
};

/**
 * Requests the source of this compilation unit asynchronously. Source will be
 * retrieved from the browser and reported back to the listener function when available.
 * The handler may be called before or after this function returns.
 * <p>
 * TODO: what if the compilation unit no longer exists in the browser
 * </p>
 * @function
 * @param listener a listener (function) that accepts a {@link String} of source code
 */
CompilationUnit.prototype.getSource = function(listener)
{
    //TODO:
};

/**
 * Requests to create a breakpoint in this compilation unit asynchronously. A breakpoint
 * creation request will be sent to the browser and an <code>onToggleBreakpoint</code>
 * event will be sent by the browser when the breakpoint is installed.
 * <p>
 * <ul>
 * <li>TODO: onToggleBreakpoint event is not spec'd - is this the intended use?</li>
 * <li>TODO: line number out of range</li>
 * <li>TODO: compilation unit no longer exists in the browser</li>
 * <li>TODO: breakpoint already set</li>
 * <li>TODO: is line number 0 or 1 based</li>
 * </ul>
 * </p>
 * @function
 * @param lineNumber the source line number in this compilation unit to set the breakpoint on
 * @return the {@link Breakpoint} that was created
 */
CompilationUnit.prototype.setBreakpoint = function(lineNumber)
{
    // TODO:
};

// ************************************************************************************************
// Private

/**
 * Adds the specified breakpoint to this compilation unit's collection of breakpoints.
 * Implementation should call this method when a breakpoint is created in a compilation
 * unit.
 * 
 * @param breakpoint the breakpoint that was created
 * @function
 */
CompilationUnit.prototype._addBreakpoint = function(breakpoint)
{
    this.breakpoints.push(breakpoint);
};

/**
 * Removes the specified breakpoint from this compilation unit's collection of breakpoints.
 * Implementation should call this method when a breakpoint is cleared from a compilation
 * unit.
 * 
 * @param breakpoint the breakpoint that was removed
 * @function
 */
CompilationUnit.prototype._removeBreakpoint = function(breakpoint)
{
    for ( var i = 0; i < this.breakpoints.length; i++)
    {
        if (this.breakpoints[i] === breakpoint)
        {
            this.breakpoints.splice(i, 1);
            return;
        }
    }
};

// ************************************************************************************************
// CommonJS

exports = CompilationUnit;
