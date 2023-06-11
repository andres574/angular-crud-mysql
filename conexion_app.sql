-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-05-2023 a las 01:22:48
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `conexion_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afiliado`
--

CREATE TABLE `afiliado` (
  `id_tipo_doc` int(10) NOT NULL,
  `id_afiliado` int(10) NOT NULL,
  `CC` int(20) NOT NULL,
  `nombre` text NOT NULL,
  `apellidos` text NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `fecha_afiliacion` date NOT NULL,
  `direccion` varchar(30) NOT NULL,
  `telefono` text NOT NULL,
  `id_sisben` int(11) NOT NULL,
  `nivel_sisben` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `afiliado`
--

INSERT INTO `afiliado` (`id_tipo_doc`, `id_afiliado`, `CC`, `nombre`, `apellidos`, `fecha_nacimiento`, `fecha_afiliacion`, `direccion`, `telefono`, `id_sisben`, `nivel_sisben`) VALUES
(1, 48, 12, 'cristian', 'sanchez perez', '2023-05-21', '2023-05-21', 'cll 13 #28-24', '3118724258', 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sisben`
--

CREATE TABLE `sisben` (
  `id_sisben` int(11) NOT NULL,
  `puntaje_sisben` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sisben`
--

INSERT INTO `sisben` (`id_sisben`, `puntaje_sisben`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `id_tipo_doc` int(10) NOT NULL,
  `descripcion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_documento`
--

INSERT INTO `tipo_documento` (`id_tipo_doc`, `descripcion`) VALUES
(1, 'Cedula '),
(2, 'tarjeta de identidad');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `afiliado`
--
ALTER TABLE `afiliado`
  ADD PRIMARY KEY (`id_afiliado`),
  ADD UNIQUE KEY `CC` (`CC`),
  ADD KEY `id_sisben_2` (`id_sisben`),
  ADD KEY `id_tipo_doc` (`id_tipo_doc`);

--
-- Indices de la tabla `sisben`
--
ALTER TABLE `sisben`
  ADD PRIMARY KEY (`id_sisben`);

--
-- Indices de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`id_tipo_doc`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `afiliado`
--
ALTER TABLE `afiliado`
  MODIFY `id_afiliado` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `sisben`
--
ALTER TABLE `sisben`
  MODIFY `id_sisben` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `id_tipo_doc` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
