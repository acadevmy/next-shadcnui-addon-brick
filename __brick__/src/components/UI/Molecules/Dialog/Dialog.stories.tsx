import { Copy } from "@carbon/icons-react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/UI/Atoms/Button";
import Input from "@/components/UI/Atoms/Input";
import Label from "@/components/UI/Atoms/Label";
import Dialog, {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/Molecules/Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Molecules/Dialog",
  component: Dialog,
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const DialogContentExample = () => (
  <>
    <DialogHeader className="container">
      <DialogTitle>Share link</DialogTitle>
      <DialogDescription>
        Anyone who has this link will be able to view this.
      </DialogDescription>
    </DialogHeader>
    <div className="flex items-center space-x-2 container">
      <div className="grid flex-1 gap-2">
        <Label htmlFor="link" className="sr-only">
          Link
        </Label>
        <Input
          id="link"
          defaultValue="https://ui.shadcn.com/docs/installation"
          readOnly
        />
      </div>
      <Button type="submit" size="sm">
        <span className="sr-only">Copy</span>
        <Copy className="h-4 w-4" />
      </Button>
    </div>
    <DialogFooter className="sm:justify-start mt-4 container">
      <DialogClose asChild>
        <Button type="button">Close</Button>
      </DialogClose>
    </DialogFooter>
  </>
);

export const Default: Story = {
  args: {
    children: (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogContentExample />
        </DialogContent>
      </Dialog>
    ),
  },
};

export const Fullscreen: Story = {
  args: {
    children: (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent isFullScreen>
          <DialogContentExample />
        </DialogContent>
      </Dialog>
    ),
  },
};
