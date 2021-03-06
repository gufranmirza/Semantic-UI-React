import * as React from 'react';

interface CommentAvatarProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** Specifies the URL of the image. */
  src?: string;
}

declare const CommentAvatar: React.StatelessComponent<CommentAvatarProps>;

export default CommentAvatar;
