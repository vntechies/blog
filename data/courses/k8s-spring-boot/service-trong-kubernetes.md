---
title: Truy cập ứng dụng từ trong hoặc ngoài cụm Kubernetes
date: '2022-12-10'
tags: ['api', 'rest-api', 'springboot', 'kubernetes']
series: ['k8s-spring-boot']
draft: false
authors: ['thanhnb']
images: ['/static/images/ogps/k8s-springboot.png']
summary: 'Trong bài này chúng ta sẽ tìm hiểu về Service, cách truy cập ứng dụng từ bên ngoài cụm Kubernetes và cách các ứng dụng kết nối, liên lạc với nhau bên trong cụm Kubernetes.'
index: 4
---

<TOCInline toc={props.toc} asDisclosure />

## 1. Giới thiệu chung

Ở bài [trước](/courses/k8s-spring-boot/quan-ly-pod-voi-replicationController-deployment), chúng ta đã tìm hiểu cách triển khai ứng dụng và quản lý các pod của ứng dụng thông qua ReplicationController và Deployment. Trong file cấu hình Courses service đang cấu hình thông tin Students service bằng IP và Port của pod để gọi sang Students service lấy thông tin học sinh. Có vấn đề thế này thường trong một hệ thống sẽ có rất nhiều những ứng dụng cùng hoạt động và mỗi ứng dụng có thể được triển khai trên nhiều pod (có thể tăng/giảm số lượng pod linh hoạt), làm cách nào để các ứng dụng này có thể tương tác với nhau mà không cần quan tâm đến số lượng pod cũng như địa chỉ IP của chúng (vì địa chỉ IP của pod là KHÔNG cố định, có thể bị thay đổi).

Chúng ta mong muốn rằng có một thứ gì đó đứng phía trước các pod của ứng dụng (mình tạm gọi là "X"). Đối tượng "X" này phải có địa chỉ IP không bị thay đổi khi các pod phía sau thay đổi, và các ứng dụng khi tương tác với nhau thay vì tương tác trực tiếp với các pod của ứng dụng thì sẽ tương tác với "X".

Trong Kubernetes có một đối tượng gọi là "Service" sẽ giúp các ứng dụng bên trong và ngoài cụm Kubernetes tương tác với nhau mà không cần tương tác trực tiếp với các pod của các ứng dụng.

## 2. Service trong Kubernetes là gì?

Service là một đối tượng trong Kubernetes. Service sẽ đứng phía trước các pod của hai ứng dụng và khi các ứng dụng cần tương tác với nhau thì sẽ tương tác thông qua object Service. Những thông tin của Service (địa chỉ IP, DNS và port) sẽ KHÔNG bị thay đổi dù cho các pod của hai ứng dụng có thể tăng/giảm số lượng, khi thực hiện update, rollback,... Service còn thực hiện load-balances (phân tải) các request vào các pod (round robin). Kubernetes hỗ trợ các loại service như: **ClusterIP**, **NodePort**, **LoadBalancer**.

Bạn có thể tìm hiểu thêm về object Service [tại trang web chính thức của Kubernetes](https://kubernetes.io/docs/concepts/services-networking/service/).

## 3. Truy ứng dụng từ bên trong cụm Kubernetes

![Service trong Kubernetes](/static/images/assets/clusterIP-service.png)

### ClusterIP Service là gì?

Kubernetes hỗ trợ loại service là **ClusterIP Service**, loại Service này sẽ là loại mặc định khi triển khai. ClusterIP Service có một số đặc điểm như:

- Khi triển khai sẽ có địa chỉ IP và port (chỉ có thể dùng để truy cập trong nội bộ cụm Kubernetes). Địa chỉ IP và port của Service sẽ không bị thay đổi cho dù các pod của ứng dụng đứng phía sau thay đổi. Nhưng nếu xóa Service đi triển khai lại thì Service sẽ được gắn với địa chỉ IP mới.
- Kubernetes đăng ký một Internal DNS Service giống với tên của Service, có thể sử dụng Internal DNS Service này để truy cập đến ứng dụng từ bên trong cụm Kubernetes thay vì sử dụng ClusterIP và port.

### Tạo ClusterIP Service bằng YAML file

```YAML:k8s/student-clusterIP-svc.yaml
apiVersion: v1
kind: Service
metadata:
  name: students-service
spec:
  selector:
    app: students-service
  type: ClusterIP
  ports:
  - port: 80
    targetPort: 8080
```

Các thành phần của ClusterIP Service:

| Tên             | Định nghĩa                                                                                                                                                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiVersion`    | Version của Kubernetes API mà bạn sử dụng để tạo object/resource. Ở file cấu hình trên là v1.                                                                                                                                                                    |
| `kind`          | Loại object/resource của Kubernetes. Ở file cấu hình trên là `Service`.                                                                                                                                                                                          |
| `metadata`      | Các thông tin như: name, labels, namespace và các thông tin khác của object/resource. Ở file cấu hình trên tên của Service là: `name: students-service` và Service sẽ được tạo ở `namespace: default`.                                                           |
| `spec`          | Mô tả các thành phần của Service như: selector, type và ports.                                                                                                                                                                                                   |
| `spec.selector` | Mô tả các labels selector mà Service sẽ dùng để tìm pod có cùng labels. Ở file cấu hình trên Service sẽ tìm các pod có labels là: `app: students-service`.                                                                                                       |
| `spec.type`     | Mô tả loại của Service. Ở file cấu hình trên loại Service là: `type: ClusterIP`.                                                                                                                                                                                 |
| `spec.ports`    | Mô tả các port của Service có và mapping giữa port của Service và port của ứng dụng. Ở trên thì port của service là: `port: 80` và port của ứng dụng là: `targetPort: 8080`. Khi request đến port 80 của Service thì sẽ được forward đến port 8080 của ứng dụng. |

### Cấu hình và truy cập ứng dụng thông qua ClusterIP service

Tạo Service sử dụng lệnh `kubectl apply -f <service-path-file>`:

```shell
kubectl apply -f student-clusterIP-svc.yaml
service/students-service created
```

Lấy danh sách các service và pod:

```shell
# Lấy danh sách các service:
kubectl get svc -o wide
NAME                 TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE    SELECTOR
students-service     ClusterIP   10.152.183.232   <none>        80/TCP         21s    app=students-service

# Lấy danh sách pods:
kubectl get pods --show-labels
NAME                                READY   STATUS    RESTARTS        AGE     LABELS
students-service-5f4569998f-dz9f8   1/1     Running   5 (4h53m ago)   2d21h   app=students-service,pod-template-hash=5f4569998f
students-service-5f4569998f-jrlmc   1/1     Running   5 (4h53m ago)   2d21h   app=students-service,pod-template-hash=5f4569998f
students-service-5f4569998f-5ppwq   1/1     Running   5 (4h52m ago)   2d21h   app=students-service,pod-template-hash=5f4569998f
```

Cấu hình Courses service gọi tới Students service thông qua ClusterIP của service

```YAML:k8s/courses-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: courses-service
  labels:
    app: courses-service
spec:
  selector:
    matchLabels:
      app: courses-service
  replicas: 3
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: courses-service
    spec:
      containers:
        - name: courses-service
          image: thanhnb1/courses-service:latest
          env:
          - name: SERVER_PORT
            value: "8080"
          - name: MYSQL_URL
            value: "jdbc:mysql://mysql:3306/courses"
          - name: MYSQL_USERNAME
            value: "courses"
          - name: MYSQL_PASSWORD
            value: "VNTechies2023"

          # Cấu hình URI gọi đến Students service. Thường sẽ sử dụng DNS của service để cấu hình
          # vì IP và port của service vẫn có thể thay đổi.
          - name: STUDENTS_URI
            value: http://10.152.183.232:80
          ports:
            - containerPort: 8080
      restartPolicy: Always
```

Gọi API "/api/courses/v1/joinCourse" để kiểm tra Courses-service có thể gọi tới Students-service thông qua Object Service (ClusterIP và Port) như đã cấu hình phía trên hay không?

```shell
# Sử dụng port-forward để có thể gọi được ứng dụng từ bên ngoài cụm Kubernetes.
kubectl port-forward po/courses-service-6ccf6699dc-pvs4d 8080:8080
Forwarding from 127.0.0.1:8080 -> 8080
Forwarding from [::1]:8080 -> 8080

# Gọi API `/api/courses/v1/joinCourse` thì Courses service sẽ gọi sang Students service để lấy thông tin học sinh.
curl --location --request POST 'localhost:8080/api/courses/v1/joinCourse' \
--header 'Content-Type: application/json' \
--data-raw '{
    "courseId": "1",
    "studentId": "1"
}'

# Response trả về:
{"success":true,"msg":"Success","data":{"id":1,"name":"HOC LAM GIAU","desc":"NEU M 100 ti THI PHAI THAM GIA NGAY :D","author":"VNTechies"}}
```

Xem logs của Students-service thì cũng đã thấy có logs gọi sang. Như vậy là đã có thể gọi từ Courses-service sang Students-service thông qua thông qua Object Service (ClusterIP và Port).

```
2023-03-31 23:21:30.277  INFO 1 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 1 ms
2023-03-31 23:21:30.282  INFO 1 --- [nio-8080-exec-1] c.v.k.students.filter.CustomURLFilter    :
LOGGING REQUEST-----------------------------------
[REQUEST-ID]: 93628ab9-c7e3-4f2b-927a-81d7153026b9
[PATH]: /api/students
[QUERIES]: null
[HEADERS]:
---host : 10.152.183.232
---user-agent : curl/7.68.0
---accept : */*

2023-03-31 23:21:30.473  INFO 1 --- [nio-8080-exec-1] c.v.k.students.filter.LoggingService     :
LOGGING RESPONSE-----------------------------------
[REQUEST-ID]: 93628ab9-c7e3-4f2b-927a-81d7153026b9
[BODY RESPONSE]:
[{"id":1,"fullName":"NGUYEN BA THANH","dateOfBirth":"29/04/1998","hometown":"HA DONG, HA NOI","gender":"MALE"}]
LOGGING RESPONSE-----------------------------------
```

Thông tin object Service (ClusterIP) trong Kubernetes sẽ không bị phụ thuộc vào sự thay đổi tăng hoặc giảm số lượng pod của ứng dụng, nhưng khi thực hiện xóa object Service đi triển khai lại thì thông tin của object Service (ClusterIP) sẽ thay đổi nếu lúc này mà vẫn giữ cấu hình bằng ClusterIP thì sẽ không còn đúng nữa và lúc này Courses service sẽ không thể gọi sang Students service.

### Cấu hình và truy cập ứng dụng thông qua Internal DNS Service

Sử dụng Internal DNS Service để gọi ứng dụng trong nội bộ cụm Kubernetes, các ứng dụng này cùng hoặc khác namespace. Sử dụng format này để gọi các ứng dụng cùng hoặc khác namespace: `<SERVICE_NAME>.<NAMESPACE>.svc.cluster.local`. Nếu các ứng dụng cùng namespace thì chỉ cần sử dụng tên service.

```YAML:k8s/courses-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: courses-service
  labels:
    app: courses-service
spec:
  selector:
    matchLabels:
      app: courses-service
  replicas: 3
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: courses-service
    spec:
      containers:
        - name: courses-service
          image: thanhnb1/courses-service:latest
          env:
          - name: SERVER_PORT
            value: "8080"
          - name: MYSQL_URL
            value: "jdbc:mysql://mysql:3306/courses"
          - name: MYSQL_USERNAME
            value: "courses"
          - name: MYSQL_PASSWORD
            value: "VNTechies2023"

          # Cấu hình URI gọi đến Students service sử dụng DNS của service.
          - name: STUDENTS_URI
            value: http://students-service.default.svc.cluster.local
          ports:
            - containerPort: 8080
      restartPolicy: Always
```

Gọi API "/api/courses/v1/joinCourse" để kiểm tra Courses-service có thể gọi tới Students-service thông qua Object Service (DNS) như đã cấu hình phía trên hay không?

```shell
# Sử dụng port-forward để có thể gọi được ứng dụng từ bên ngoài cụm Kubernetes.
kubectl port-forward po/courses-service-6ccf6699dc-pvs4d 8080:8080
Forwarding from 127.0.0.1:8080 -> 8080
Forwarding from [::1]:8080 -> 8080

# Gọi API `/api/courses/v1/joinCourse` thì Courses service sẽ gọi sang Students service để lấy thông tin học sinh.
curl --location --request POST 'localhost:8080/api/courses/v1/joinCourse' \
--header 'Content-Type: application/json' \
--data-raw '{
    "courseId": "1",
    "studentId": "1"
}'

# Response trả về:
{"success":true,"msg":"Success","data":{"id":1,"name":"HOC LAM GIAU","desc":"NEU M 100 ti THI PHAI THAM GIA NGAY :D","author":"VNTechies"}}
```

Xem logs của Students-service thì cũng đã thấy có logs gọi sang. Như vậy là đã có thể gọi từ Courses-service sang Students-service thông qua DNS service.

```
2023-04-01 00:24:57.066  INFO 1 --- [nio-8080-exec-2] c.v.k.students.filter.CustomURLFilter    :
LOGGING REQUEST-----------------------------------
[REQUEST-ID]: 95cd2c0f-2bc0-4016-8b14-c2d5be73d702
[PATH]: /api/students/getStudentBy
[QUERIES]: studentId=1
[HEADERS]:
---accept : application/json, application/*+json
---user-agent : Java/11.0.16.1
---host : students-service
---connection : keep-alive

2023-04-01 00:24:57.071  INFO 1 --- [nio-8080-exec-2] c.v.k.students.filter.LoggingService     :
LOGGING RESPONSE-----------------------------------
[REQUEST-ID]: 95cd2c0f-2bc0-4016-8b14-c2d5be73d702
[BODY RESPONSE]:
{"id":1,"fullName":"NGUYEN BA THANH","dateOfBirth":"29/04/1998","hometown":"HA DONG, HA NOI","gender":"MALE"}
LOGGING RESPONSE-----------------------------------
```

Khi sử dụng Internal DNS Service để cấu hình thì dù cho object service có xóa đi triển khai lại thì Internal DNS Service vẫn không thay đổi và Courses service vẫn có thể gọi đến Students service mà không cần cấu hình lại.

Trong seri này ta sử dụng MicroK8s để tạo cụm Kubernetes. Để tương tác được ứng dụng bằng ServiceName hãy đảm bảo rằng bạn đã enable DNS. Bạn có thể tham khảo [hướng dẫn này](https://microk8s.io/docs/addon-dns).

## 4. Truy cập ứng dụng từ bên ngoài cụm Kubernetes với NodePort Service

![NodePort Service Kubernetes](/static/images/assets/nodePort-service.png)

### NodePort Service là gì?

Kubernetes hỗ trợ loại Service khác gọi là **NodePort Service**, khi triển khai NodePort service thì có một số điểm như:

- NodePort Service cũng sẽ có CLUSTER-IP, PORT và Internal DNS Service giống như ClusterIP Service nên khi triển khai NodePort Service thì ứng dụng vẫn có thể truy cập ứng dụng từ bên trong cụm Kubernetes.
- NodePort Service có thêm một port nữa gọi là _NodePort_ và có thể truy cập ứng dụng từ bên ngoài cụm Kubernetes. NodePort này sẽ được random từ 30000-32767 (nếu không được chỉ định cụ thể) và NodePort sẽ được mở ở tất cả các Node trong cụm Kubernetes.

### Tạo NodePort Service bằng YAML file

```yaml:k8s/student-nodeport-svc.yaml
apiVersion: v1
kind: Service
metadata:
  name: students-service
spec:
  selector:
    app: students-service
  type: NodePort
  ports:
  - port: 80
    targetPort: 8080
    nodePort: 32000
```

Các thành phần của NodePort Service:

| Tên                     | Định nghĩa                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `spec.type`             | Mô tả loại của Service. Ở đây loại Service là: `type: NodePort`.                                                                                                                      |
| `spec.ports.port`       | Mô tả port của Service mà được sử dụng để gọi trong nội bộ cụm Kubernetes. Ở đây Service `student-service` đang chạy ở port 80.                                                       |
| `spec.ports.targetPort` | Mô tả port của container ứng dụng sử dụng. Ở đây thì container ứng dụng đang chạy ở port 8080.                                                                                        |
| `spec.ports.nodePort`   | Mô tả _NodePort_ mà Service expose để ứng dụng có thể truy cập từ bên ngoài. Ở đây `nodePort: 32000` thì Service sẽ expose port 32000 (nếu không mô tả thì sẽ random từ 30000-32767). |

### Triển khai NodePort Service và truy cập ứng dụng từ bên ngoài cụm Kubernetes

Triển khai object Service sử dụng lệnh `kubectl apply -f <service-path-file>`:

```shell
kubectl apply -f k8s/student-nodeport-svc.yaml
service/students-service created
```

Lấy danh sách các services và pods:

```shell
# Lấy danh sách pods:
kubectl get pods
NAME                                    READY   STATUS    RESTARTS       AGE
pod/students-service-68f7c496bd-h8s7m   1/1     Running   3 (105m ago)   17h
pod/students-service-68f7c496bd-fcd7z   1/1     Running   3 (105m ago)   17h
pod/students-service-68f7c496bd-fdht2   1/1     Running   3 (105m ago)   17h

# Lấy danh sách Service:
kubectl get svc
NAME               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
students-service   NodePort    10.152.183.40   <none>        80:32000/TCP   97s

# Service Type: NodePort
# PORT(S): 80:32000/TCP. Port 32000 sẽ expose ra bên ngoài cụm Kubernetes. Bên ngoài cụm Kubernetes có thể dùng port này để truy cập ứng dụng.
```

Truy cập ứng dụng từ bên ngoài cụm Kubernetes:

```shell
curl --location --request GET 'localhost:32000/api/students'

[{"id":1,"fullName":"NGUYEN BA THANH","dateOfBirth":"29/04/1998","hometown":"HA DONG, HA NOI","gender":"MALE"}]
```

## 5. Truy cập ứng dụng từ bên ngoài cụm Kubernetes với LoadBalancer Service

## 6. Tổng kết

Trong bài này chúng ta đã tìm hiểu cách để các ứng dụng bên trong cụm Kubernetes có thể liên lạc được với nhau cũng như có thể truy cập ứng dụng từ bên ngoài. Ở bài tiếp theo chúng ta sẽ tìm hiểu cách quản lý cấu hình của ứng dụng thông qua hai đối tượng ConfigMap và Secret trong Kubernetes.
