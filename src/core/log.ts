import chalk from "chalk";

/**
 * Logs messages to console.
 * @param args The messages to log.
 */
export function log(...args: unknown[]): void {
  console.log(chalk.grey("[LOG]", ...args));
};

/**
 * Logs info messages to console.
 * @param args The info messages to log.
 */
export function info(...args: unknown[]): void {
  console.info(chalk.blue("[INFO]", ...args));
};

/**
 * Logs warning messages to console.
 * @param args The warning messages to log.
 */
export function warn(...args: unknown[]): void {
  console.warn(chalk.yellow("[WARN]", ...args));
};

/**
 * Logs error messages to console.
 * @param args The error messages to log.
 */
export function error(...args: unknown[]): void {
  console.error(chalk.red("[ERROR]", ...args));
};

/**
 * Logs success messages to console.
 * @param args The success messages to log.
 */
export function success(...args: unknown[]): void {
  console.log(chalk.green("[SUCCESS]", ...args));
};
