import { exec } from "child_process";
import * as path from "path";
import { promisify } from "util";

const execP = promisify(exec);

export interface CliExecutionResult {
  code: number;
  error: Error;
  stdout: string;
  stderr: string;
}

export async function cli(
  args: string[],
  cwd: string
): Promise<CliExecutionResult> {
  const code: number = 0;
  const error: Error | null = null;
  let stderr: string = "";
  let stdout: string = "";

  try {
    const result = await execP(
      `${path.resolve("./dist/typescript-library-boilerplate")} ${args.join(
        " "
      )}`,
      { cwd }
    );
    stderr = result.stderr;
    stdout = result.stdout;
  } catch (e) {
    return {
      code: e.code,
      error: e,
      stderr: e.stderr,
      stdout: e.stdout
    };
  }

  return {
    code,
    error,
    stderr,
    stdout
  };
}
