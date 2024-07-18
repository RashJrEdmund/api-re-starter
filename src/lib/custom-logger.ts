type LoggerTYPe = (_label: string, val: any, options?: {
  clear?: boolean,
  type?: "warn" | "error" | "log",
}) => void;

/**
 * @argument _label as what to label logged info
 * @argument val as value to log out
 * @argument options? (optional) object with some configs like log type where "log" is the @default "log". e.g "warn", "error", 
*/
const custom_logger: LoggerTYPe = (_label, val, options) => {
  if (options?.clear) console.clear();

  const _log_type = options?.type ?? "log";

  return console[_log_type](
      `\n \n ========== START +=> ${_label} ========== \n \n`,
      val,
      `\n \n ========== END +=> ${_label} ========== \n \n`
  );
}

export default custom_logger;