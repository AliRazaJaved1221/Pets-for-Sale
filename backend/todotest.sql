PGDMP  &    (            	    |            todotest    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16432    todotest    DATABASE     ~   CREATE DATABASE todotest WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Pakistan.1252';
    DROP DATABASE todotest;
                postgres    false            �            1259    16463    Pets    TABLE       CREATE TABLE public."Pets" (
    id integer NOT NULL,
    breed character varying,
    color character varying,
    age character varying,
    price character varying,
    description character varying,
    image character varying,
    "isAlive" boolean DEFAULT true NOT NULL
);
    DROP TABLE public."Pets";
       public         heap    postgres    false            �            1259    16462    Pets_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Pets_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Pets_id_seq";
       public          postgres    false    220            �           0    0    Pets_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Pets_id_seq" OWNED BY public."Pets".id;
          public          postgres    false    219            �            1259    16453    Review    TABLE     �   CREATE TABLE public."Review" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "petId" integer NOT NULL,
    feedback character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Review";
       public         heap    postgres    false            �            1259    16452    Review_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Review_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Review_id_seq";
       public          postgres    false    218            �           0    0    Review_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Review_id_seq" OWNED BY public."Review".id;
          public          postgres    false    217            �            1259    16444 
   UserEntity    TABLE     \  CREATE TABLE public."UserEntity" (
    id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone,
    role character varying,
    "mobileContact" character varying
);
     DROP TABLE public."UserEntity";
       public         heap    postgres    false            �            1259    16443    UserEntity_id_seq    SEQUENCE     �   CREATE SEQUENCE public."UserEntity_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."UserEntity_id_seq";
       public          postgres    false    216            �           0    0    UserEntity_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."UserEntity_id_seq" OWNED BY public."UserEntity".id;
          public          postgres    false    215            '           2604    16714    Pets id    DEFAULT     f   ALTER TABLE ONLY public."Pets" ALTER COLUMN id SET DEFAULT nextval('public."Pets_id_seq"'::regclass);
 8   ALTER TABLE public."Pets" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            %           2604    16715 	   Review id    DEFAULT     j   ALTER TABLE ONLY public."Review" ALTER COLUMN id SET DEFAULT nextval('public."Review_id_seq"'::regclass);
 :   ALTER TABLE public."Review" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            $           2604    16717    UserEntity id    DEFAULT     r   ALTER TABLE ONLY public."UserEntity" ALTER COLUMN id SET DEFAULT nextval('public."UserEntity_id_seq"'::regclass);
 >   ALTER TABLE public."UserEntity" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16463    Pets 
   TABLE DATA           ]   COPY public."Pets" (id, breed, color, age, price, description, image, "isAlive") FROM stdin;
    public          postgres    false    220   7       �          0    16453    Review 
   TABLE DATA           P   COPY public."Review" (id, "userId", "petId", feedback, "createdAt") FROM stdin;
    public          postgres    false    218   \$       �          0    16444 
   UserEntity 
   TABLE DATA           v   COPY public."UserEntity" (id, username, email, password, "createdAt", "updatedAt", role, "mobileContact") FROM stdin;
    public          postgres    false    216   y$       �           0    0    Pets_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Pets_id_seq"', 166, true);
          public          postgres    false    219            �           0    0    Review_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Review_id_seq"', 3, true);
          public          postgres    false    217            �           0    0    UserEntity_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."UserEntity_id_seq"', 52, true);
          public          postgres    false    215            .           2606    16471 #   Pets PK_1f3689a0d2c2eea24dbe2955972 
   CONSTRAINT     e   ALTER TABLE ONLY public."Pets"
    ADD CONSTRAINT "PK_1f3689a0d2c2eea24dbe2955972" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."Pets" DROP CONSTRAINT "PK_1f3689a0d2c2eea24dbe2955972";
       public            postgres    false    220            ,           2606    16461 %   Review PK_4af5ddfa8a65e5571d851e4b752 
   CONSTRAINT     g   ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "PK_4af5ddfa8a65e5571d851e4b752" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public."Review" DROP CONSTRAINT "PK_4af5ddfa8a65e5571d851e4b752";
       public            postgres    false    218            *           2606    16451 )   UserEntity PK_f28c02cf76148cdc220d5c056ed 
   CONSTRAINT     k   ALTER TABLE ONLY public."UserEntity"
    ADD CONSTRAINT "PK_f28c02cf76148cdc220d5c056ed" PRIMARY KEY (id);
 W   ALTER TABLE ONLY public."UserEntity" DROP CONSTRAINT "PK_f28c02cf76148cdc220d5c056ed";
       public            postgres    false    216            /           2606    16472 %   Review FK_0d904edee7210750be2fe4c4dba    FK CONSTRAINT     �   ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "FK_0d904edee7210750be2fe4c4dba" FOREIGN KEY ("userId") REFERENCES public."UserEntity"(id);
 S   ALTER TABLE ONLY public."Review" DROP CONSTRAINT "FK_0d904edee7210750be2fe4c4dba";
       public          postgres    false    216    4650    218            0           2606    16477 %   Review FK_ecc22f329685ac76668f7548dfc    FK CONSTRAINT     �   ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "FK_ecc22f329685ac76668f7548dfc" FOREIGN KEY ("petId") REFERENCES public."Pets"(id);
 S   ALTER TABLE ONLY public."Review" DROP CONSTRAINT "FK_ecc22f329685ac76668f7548dfc";
       public          postgres    false    4654    218    220            �     x����n�6�����(�I<��&��m�]�X��mZR���$o������M,�3�����?#B�w�jU�:�T������2�s�kZD�Wk�1�qI�&q5q���61�*)L�<��q���6nn*�4U���C[�l7�3��f]V6%�2%3�i&pJ��J.��������(k���޹֢�ƾ"�Fң��{����h3(NyʔVD�O
ݹ��J[Er��S�ê?�+l�h�]y��i�}`)�w����!�8�$�X,%U�F?寛�_͗�rݡ?���H'Ϯ�q�7��>����%��P�锳�aN	!)F�,m�P���=`�\~���c���G�˹9d�+�S�(�1����]lE�7��;S%���l��Ga�È��QekJR�1#^�I=�
g���R}�d�ʱZ��H��0P�^!$3`��|�R"�r�`"G����h��);�WR�y�� ���e��\*d�R��j�<!lR-C��Un�2���"d�
���;1��K�K��|f�+�j0�,�;fG�l�Y���2˧�順����!����Z.��1��5f�K�*-��c"H���[��m�
�6�T�&ЎK�8B^��r��?�:��4��0�9N)�+�bRW�[S�^qK4�hɔ��3�Y��bzy�?�K�*%�	�L�j���ʶH��5t�r$\�8�	��D����������gX���C7�,��=A*�>YL7�W�ڿcn���ۅg9�7�C���S.��2�##���+���G�{���Og�P-	ciF U�P]=(E_�H6(�]��s�D6��H��n5�'��|:� h���4TL�]�1�uۄ,�X�1S�v2� �<H=Re��ܔÜ4I�'�~޶O�����*ƇA?4���J-��H9��C��C�(k���'�:h�v
h��J	���D���`��ͳ��)l����^�~|�>6��2(T�R�`6�z�^e�ɣ�`
�������o <�5CX�:�:�
��P���:�;ʩ�6o��i�~��x�VTҒ�\PE��Mx�]׽�ҏ�1׳A%�
x�-��"�dDô@�$9����(��d����=#�.�m����֤Dq����o������]�p�Ch�aj~�U�^���-k?���;\�����M�'�E�G|�p��`$����;��8���pi��
��#C�p�'���Lmpax4�Xr�(�m�^P7B@%N��
\ ��:Pr��=��<��+�8�whJGQGe|:9g@J*iF�&>I`��������?1ZvJ      �      x������ � �      �   �   x�e��R�0�g�)��I���ڵwe����)5��6)<=&��wh��_����U���~�]�g���P�ۏ`DZ���;�r�K#�
S��Rj05��`�`@Oj��d����|�qjw�_�ZT,�*��Ќbb|S��ǳ��<@�p7�?ő�7`I�)��a�c�����<��qF�ډY���r����M���Kg�P*�l�1�W     