type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
