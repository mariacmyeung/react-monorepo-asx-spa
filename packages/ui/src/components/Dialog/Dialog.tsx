import * as DialogPrimitive from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Overlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const Content = styled(DialogPrimitive.Content)`
  background: pink;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Dialog = ({ open, onOpenChange, children }: DialogPrimitive.DialogProps) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <Overlay />
    <Content>{children}</Content>
  </DialogPrimitive.Root>
);
