export interface CreateArticleDto {
  title: string;
  description: string;
}


export interface UpdatedArticleDto {
  title?: string;
  description?: string;
}

export interface RequestUserDto {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface UpdateUserDto {
  username?: string;
  email?: string;
  password?: string;
}

export interface CreateCommentDto {
  text: string;
  articleId: number;
}


export interface UpdateCommentDto {
  text?: string;
}