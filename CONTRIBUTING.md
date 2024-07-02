---
title: Đóng góp / Từ thiện ❤️‍🔥
---

![Hãy đóng góp cho VNTechies Dev Blog bạn nhé](/public/static/images/contribute.png)

_Contributors của [VNTechies Dev Blog](https://vntechies.dev/) ở một góc phố nhỏ_

**VNTechies Dev Blog là một dự án mã nguồn mở, trang web và các bài viết được đóng góp từ cộng đồng và phi lợi nhuận.
Bạn có thể tham khảo source code của website này trên github repo [vntechies/blog](https://github.com/vntechies/blog).
Để đóng góp cho trang web cũng như bài viết cho VNTechies, các đồng chí vui lòng làm theo hướng dẫn sau đây**

## Hướng dẫn cơ bản

Dưới đây là một số thông tin cơ bản về dự án:

- Đối với lỗi chính tả hoặc các bản sửa lỗi nhỏ rất rõ ràng hãy tạo các pull request mà không cần tạo issue trên github, liên hệ hoặc thảo luận
- Với các ý tưởng mới về bài viết, series, xin vui lòng thảo luận qua messenger hoặc email trước hoặc tạo issue trên github
- Các bài viết / nội dung được quản lý bởi `NextJS` dưới thư mục `data/blog` và được viết bằng markdown.

## Cải thiện, thêm, sửa nội dung qua Github

- Đầu tiên, bạn cần fork nhánh `main` tại [repository trên Github](https://github.com/vntechies/blog/fork), sau đó clone về máy của bạn.

- Bạn cần có Node cài đặt trên máy của bạn.

```shell:shell
git clone git@github.com:<github id của bạn>/blog.git
npm install
npm run dev

git checkout -b my-fix
```

Sau khi sửa/thêm nội dung, hãy tạo một Pull request trên Github.

```shell:shell
git commit -m "fix/content: corrected a typo"
git push origin my-fix
```

## Viết bằng Markdown

- Content được viết dưới dạng Markdown. Các bài viết muốn có Mục lục format theo đúng chuẩn chỉ nên sử dụng tag h2 và h3
- Các bạn có thể tham khảo hướng dẫn cụ thể cho việc viết văn bản dưới dạng markdown tại [bài viết này](https://tailwind-nextjs-starter-blog.vercel.app/blog/github-markdown-guide)
- Với các file ảnh hoặc video cho bài viết, vui lòng đặt tại thư mục `/public/static/images/assets` và sử dụng đường dẫn `/static/images/assets/<tên file>` để dùng trong bài viết

## Thêm thông tin của contributor

Cảm ơn sự đóng góp của bạn 🙏

Hãy chắc chắn rằng thông tin của bạn được thêm vào trong thư mục chứa thông tin tác giả có tại `data/authors`
và update ảnh đại diện của bạn tại thư mục `public/static/images/authors/`

Dưới dây là mẫu thông tin tại `data/authors`

```md:depnhatxom.mdx
---
name: Đẹp nhất xóm
avatar: /static/images/authors/depnhatxom.jpeg
occupation: Sinh viên
company: Đại học bôn ba
email: depnhatxom@yahoo.com.vn
twitter: https://twitter.com/depnhatxom
facebook: https://fb.me/depnhatxom
linkedin: https://www.linkedin.com/in/depnhatxom/
github: https://github.com/depnhatxom
---

Đẹp trai, xinh gái rồi thì muốn viết cái gì vào đây cũng được 😬

```

Trong bài viết khi muốn public dưới author, anh chị em sử dụng đúng tên của file markdown trong header của bài viết

```md:post.mdx
---
title: 'Sample Post'
authors: ['depnhatxom']
---
```

Ảnh bìa được bạn [Đức
Mạnh](https://unsplash.com/@duzmanh26?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
chụp và được upload trên
[Unsplash](https://unsplash.com/s/photos/vietnam-people?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){' '}
