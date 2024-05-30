import 'dart:io';
import 'package:mason/mason.dart';

Future<void> run(HookContext context) async {
  await runPnpm(context: context);
}

Future<void> runPnpm({
  required HookContext context,
}) async {
  context.logger.info('📦 Installing shadcn/ui dependencies');
  await Process.run('pnpm', [
    'i',
    'class-variance-authority',
    'clsx',
    'lucide-react',
    'tailwind-merge',
    'tailwindcss-animate',
    '@radix-ui/react-slot'
  ]);
  context.logger.success('📦 shadcn/ui configured successfully 🚀');
}
