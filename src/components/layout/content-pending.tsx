type ContentPendingProps = {
  message: string;
};

export function ContentPending({ message }: ContentPendingProps) {
  return <p className="max-w-xl text-lg leading-8 text-muted">{message}</p>;
}
