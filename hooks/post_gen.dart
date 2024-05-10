import 'dart:io';

import 'package:mason/mason.dart';

void run(HookContext context) async {
  await runPnpm(context: context);
}

Future<void> runPnpm({
  required HookContext context,
}) async {
  context.logger.info('📦 Running pnpm i');
  await Process.run('pnpm', [
    'i',
    'class-variance-authority',
    'clsx',
    'lucide-react',
    'tailwind-merge',
    'tailwindcss-animate',
    '@radix-ui/react-slot'
  ]);
  context.logger.success('📦 pnpm configured successfully 🚀');
}
